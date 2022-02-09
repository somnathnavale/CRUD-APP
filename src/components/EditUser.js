import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const EditUser = (
  {items,editName,setEditName,editUsername,setEditUserame,editEmail,setEditEmail,editPhone,setEditPhone,handleEdit}) => 
  {
    const {id}=useParams();
    const item=items.find(item=>(item.id).toString()===id);

    useEffect(()=>{
      if(item){
        setEditName(item.name);
        setEditUserame(item.username);
        setEditEmail(item.email);
        setEditPhone(item.phone);
      }
    },[setEditName,setEditEmail,setEditPhone,setEditUserame])

  return (
      <>
        <form className='add-form' onSubmit={(e)=>{e.preventDefault()}}>
          <h2 className='lg-heading'>Edit User Form</h2>
          
          <input
            type="text" 
            id='name'
            placeholder='Name'
            required
            value={editName}
            onChange={(e)=>setEditName(e.target.value)}
          />
          <label htmlFor="name">Name</label>

          <input
            type="text" 
            id='username'
            placeholder='Username'
            required
            value={editUsername}
            onChange={(e)=>setEditUserame(e.target.value)}
          />
          <label htmlFor="username">Username</label>

          <input
            type="email" 
            id='email'
            placeholder='Email'
            required
            value={editEmail}
            onChange={(e)=>setEditEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>

          <input
            type="number" 
            id='phone'
            placeholder='Phone'
            required
            value={editPhone}
            onChange={(e)=>setEditPhone(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <button onClick={()=>handleEdit(item.id)}>Submit</button>
        </form>
      </>
    );
  };

export default EditUser;
