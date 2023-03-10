import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigation =useNavigate()
const Logout =()=>{
  localStorage.clear('token')
navigation("/login")
}
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-success mx-1" to="/signup" role="button">Sign up</Link>
      </form>:<button onClick={Logout} className='btn btn-success'>Logout</button>}
    </div>
  </div>
</nav>

    </div>
)}
export default Navbar


