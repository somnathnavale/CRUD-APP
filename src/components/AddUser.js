import React from 'react';

const AddUser = (
  {name,setName,username,setUsername,email,setEmail,phone,setPhone,handleSubmit}) => 
  {
    return (
      <>
        <form className='add-form' >
          <h2 className='lg-heading'>Add User Form</h2>
          
          <input
            type="text" 
            id='name'
            placeholder='Name'
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>

          <input
            type="text" 
            id='username'
            placeholder='Username'
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>

          <input
            type="email" 
            id='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>

          <input
            type="number" 
            id='phone'
            placeholder='Phone'
            required
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
      </>
    );
  };

export default AddUser;
