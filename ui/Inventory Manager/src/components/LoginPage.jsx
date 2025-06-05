import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


export default function LoginPage () {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    event.preventDefault();
        try{
          const response = await fetch('http://localhost:8080/users');
          const users = await response.json();

          const userExists = users.find(user => user.user_name === username && user.password === password)
          if (userExists) {
             navigate('/inventory')
          } else {
            alert('Invalid username or password!')
          }
        } catch (error) {
          console.error(error)
        }
      }

return (
  <div>
    <h2> Login </h2>
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </div>
      <button type="submit"> Login</button>
    </form>
  </div>
  )
}