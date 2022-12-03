import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Link } from 'react-router-dom';

const SignUp1 = () => {
    return (
        <div>
            <div>
                <div>
                    <h1> Signup Here</h1>
                    <form >
                        <div className=''>
                        <input className="form-control mb-3 mt-3 " type="text" placeholder="Write First Name" aria-label="default input example"  required />
                        <input className="form-control" type="text" placeholder="Write Last Name" aria-label="default input example" />
                        </div>

                    <div className='d-flex justify-content-center my-3'>
                       
                        <Link to='/SignUp2'>
                        <button type="button" class="btn btn-primary">Next step <FontAwesomeIcon icon="fa-regular fa-arrow-right" /> </button> 
                        </Link>
                    </div>

                    </form>
                    <div className='d-flex justify-content-center'>
                        <p className='pt-2'> Aleady have an Account ? </p>
                        <Link to= '/Login'>
                        <button type="button" class="btn btn-link fw-semibold">Login here </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp1;