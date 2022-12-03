import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp3 = () => {
    const navigate = useNavigate();
    const handleSignUp = event => {
        event.preventDefault();
        const user = {
            first_name: "First Name",
            last_Name: "Last Name",
            phone_number: "0000000000",
            email: "abc@example.com",
            password: "SuperSecretPassword"
        };
        
        fetch('https://test.nexisltd.com/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('ultimateAccessToken', data.access_token)
            navigate('/Login')
        })
}

  return (
    <div>
      <div>
        <div>
          <h1> Signup Here</h1>
          <form onSubmit={handleSignUp}>
            <div>
              <input
                className="form-control"
                type="password"
                placeholder="Set your password"
                aria-label="default input example"
              />
              <div id="PasswordHelp" class="form-text">
                Your Password must be atleast 8 character
              </div>
              <div id="PasswordHelp" class="form-text">
                You will be automatically redirect to login page after signup . 
              </div>
            </div>

            <div className="d-flex justify-content-around my-3">
              <div className="">
                <Link to="/SignUp2">
                <button type="button" class="btn btn-link">Back</button>
                </Link>
              </div>
              <div className="">
              <button type="submit" class="btn btn-primary">Sign up</button>
     
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
