import { useState,useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import Missing from "./components/Missing";
import {BrowserRouter as Router,Route,Routes,useNavigate} from "react-router-dom";
import api_Request from "./api_Request";
import EditUser from "./components/EditUser";

function App() {
  const API_URL = "http://localhost:3500/users";
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [editName,setEditName]=useState('');
  const [editUsername,setEditUsername]=useState('');
  const [editEmail,setEditEmail]=useState('');
  const [editPhone,setEditPhone]=useState('');
  const [isLoading,setIsLoading]=useState(true);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Invalid URL");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }finally{
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addUser=async(obj)=>{
    setItems([...items,obj]);
    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(obj)
    }
    const result=await api_Request(API_URL,postOptions);
    if(result) setFetchError(result);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=items.length ? items[items.length-1].id +1 : 1;
    const obj={name,username,email,phone,id};
    addUser(obj);
    setName('');
    setEmail('');
    setPhone('');
    setUsername('');
    navigate('/allusers');
  }

  const handleEdit=async(id)=>{
    const updatedItem={name:editName,username:editUsername,email:editEmail,phone:editPhone,id};
    const updateOptions={
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedItem)
    }
    const result=await api_Request(`${API_URL}/${id}`,updateOptions);
    if(result) console.log(result);
    setItems(items.map((item)=>item.id===id ? updatedItem : item));
    setEditName('');
    setEditUsername('');
    setEditEmail('');
    setEditPhone('');
    navigate('/allusers');
  }

  const handleDelete=async(id)=>{
    const deleteOptions={method:'DELETE'};

    const result=await api_Request(`${API_URL}/${id}`,deleteOptions);
    if(result) console.log(result);
    setItems(items.filter((item)=>item.id!==id));
  }
  return (
    <>
      <NavBar />
      <main style={{padding:"10px 20px",width:'100%',maxWidth:'1000px',margin:'auto'}}>
      <Routes>
          <Route index element={<Home title={'Crud-application'}/>}/>
          <Route path='allusers' element={<AllUser
            items={items}
            isLoading={isLoading}
            fetchError={fetchError}
            handleDelete={handleDelete}
          />}/>
          <Route path='adduser' element={<AddUser
            name={name}
            setName={setName}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            handleSubmit={handleSubmit}
          />}/>
          <Route path='/edit/:id'element={<EditUser
            items={items}
            editName={editName}
            setEditName={setEditName}
            editUsername={editUsername}
            setEditUserame={setEditUsername}
            editEmail={editEmail}
            setEditEmail={setEditEmail}
            editPhone={editPhone}
            setEditPhone={setEditPhone}
            handleEdit={handleEdit}
          />}/>
          <Route path='*' element={<Missing/>}/>
      </Routes>
      </main>
    </>
  );
}

export default App;
