import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../context/Notevalue";

const Signup = (props) => {
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigation = useNavigate();
  const onchange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };
  const summitform = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = signup;
    const response = await fetch(`${apiURL}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (password !== cpassword) {
      props.showAlert("Your Password is not match", "danger");
    } else {
      localStorage.setItem("token", json.authtoken);
      console.log(json);
      navigation("/");
      props.showAlert("Account Created succesfully ", "success");
    }
  };
  return (
    <div className="container">
      <div className="container px-5">
        <h2>Create a Account to Use iNotebook</h2>

        <form onSubmit={summitform}>
          <div className="mt-1 input-group-lg">
            <label htmlFor="name" className="form-label fs-3 mt-3">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onchange}
              minLength="5"
              required
            />
          </div>
          <div className="mt-1 input-group-lg">
            <label htmlFor="exampleInputEmail1" className="form-label fs-3">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={onchange}
              name="email"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mt-1 input-group-lg">
            <label htmlFor="exampleInputPassword1" className="form-label fs-3">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={onchange}
              name="password"
              minLength="5"
              required
            />
          </div>
          <div className="mb-2 mt-1 input-group-lg">
            <label htmlFor="exampleInputPassword1" className="form-label fs-3">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={onchange}
              name="cpassword"
              minLength="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mb-5">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
