import React, { useState } from 'react'
//import 'bootstrap/dist'
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email'
            onChange={e => setEmail(e.target.value)
            }/>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password'
            onChange={e => setPassword(e.target.value)
            }/>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login