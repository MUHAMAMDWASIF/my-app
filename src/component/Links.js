import React from 'react'
import Navbar from './Navbar'
import { Routes, Route} from "react-router-dom";
import Home from './Home';
import Alert from './Alert';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';

const Links = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type :type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  
  return (
    <div>
      <Navbar/>
      <Alert alert={alert}/>
      <Routes>
      <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
      <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
      <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
    </div>
  )
}

export default Links
