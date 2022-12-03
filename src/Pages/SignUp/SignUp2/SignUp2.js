import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp2.css'


const SignUp1 = () => {
    return (
        <div>
            <div>
                <div>
                    <h1> Signup Here</h1>
                    <form >

                    <div className="row">
                        <div className="col">
                           <input type="number" class="form-control phoneCode" placeholder="+880" aria-label="First name" />
                        </div>
                        <div className="col">
                             <input type="number" className="form-control phoneNumber" placeholder="123xxxxx" aria-label="Last name" />
                        </div>
                 </div>
                       

                        <div>
                        <input className="form-control" type="email" placeholder="Write email addresss" aria-label="default input example" />
                        </div>

                      <div className=''>
                      <div className='d-flex'>
                        <Link to= '/'>
                        <button type="button" class="btn btn-link fw-semibold"> Back </button>
                        </Link>
                          </div>
                        <div>
                          <Link to='/SignUp3'>
                          <button type="button" class="btn btn-primary">Next step</button>
                          </Link>
                        </div>
                      </div>

                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp1;