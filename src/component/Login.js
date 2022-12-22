import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Notecontext from '../context/Notecontext'
import { apiURL } from '../context/Notevalue'

const Login = (props) => {
   const [login , setlogin]=useState({email:"",password:""})
const navigation =useNavigate()    
    const onchange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
      };
      const summitform =async(e)=>{
          e.preventDefault()
  const response = await fetch(`${apiURL}/api/auth/login`, { 
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({email:login.email , password:login.password}) 
          });
          const json = await response.json()
console.log(json)
if(json.success){
    localStorage.setItem("token" , json.authtoken)
navigation('/')
props.showAlert("Logged In successfully" , "success")
}else{
  props.showAlert("invalid credentials" , "danger")
}
  }
    return (
      <div className='container'>
    <div className="container  px-5">
      <h2>Login to Use iNotebook</h2>
    <form onSubmit={summitform}>
  <div className="mb- input-group-lg " >
    <label htmlFor="exampleInputEmail1" className="form-label fs-3 mt-3">Email Address</label>
    <input type="email" className="form-control" id="email" value={login.email} onChange={onchange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 input-group-lg">
    <label htmlFor="exampleInputPassword1" className="form-label fs-3">Password</label>
    <input type="password" className="form-control" id="password" value={login.password} onChange={onchange} name='password'/>
  </div>
    <button type="submit" className="btn btn-primary " >Login</button>
</form>
    </div>
    </div>
  )
}

export default Login
