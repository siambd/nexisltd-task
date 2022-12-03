import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = {
      email: "abc@example.com",
      password: "SuperSecretPassword",
    };

    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("ultimateAccessToken", data.access_token);
        navigate("/attendance");
      });
  };
  return (
    <div>
      <h1> Login Form </h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter Your email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your password"
            className="form-control"
            id="exampleInputPassword1"
            pattern=".{8,}"
          />
          <div id="PasswordHelp" class="form-text">
            Your Password must be atleast 8 character
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
      </form>

      <div className='d-flex'>
                        <p> Dont have any account ? </p>
                        <Link to= '/'>
                        <button type="button" class="btn btn-link fw-semibold">Signup here </button>
                        </Link>
                    </div>
    
    </div>
  );
};

export default Login;
