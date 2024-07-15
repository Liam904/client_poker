import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Login from './Login';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {  
    event.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/signup', formData);
      setResponse(res.data);
      console.log(res.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if (handleSubmit){
    <Navigate to={<Login />}  />

  
  }

  return (
    <div className="wrapper">
    <div className="form-wrapper sign-in">
    
    <form onSubmit={handleSubmit}>
    <div className='input-group'>
      <input
        type="text"
        name="name"
        value={formData.player}
        onChange={handleChange}
        placeholder="Player"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      </div>
      <button className='form' type="submit">Sign Up</button>
      {response && <p>{JSON.stringify(response)}</p>}
      
    </form>
    </div>
    </div>
  );
}

export default Signup;
