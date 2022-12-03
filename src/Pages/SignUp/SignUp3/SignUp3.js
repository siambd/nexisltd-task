import React from "react";
import { Link } from "react-router-dom";

const SignUp1 = () => {
  return (
    <div>
      <div>
        <div>
          <h1> Signup Here</h1>
          <form>
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
            </div>

            <div className="">
              <div className="d-flex">
                <Link to="/">
                  <button type="button" class="btn btn-link fw-semibold">
                    {" "}
                    Back{" "}
                  </button>
                </Link>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">
                  {" "}
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp1;
