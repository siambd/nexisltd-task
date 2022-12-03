import React from 'react';
import logo from '../../assets/image/title.png'
import banner from '../../assets/image/banner.png'
import { Outlet } from 'react-router-dom';
import Login from '../Login/Login';

const main = () => {
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-evenly'>
                <div className='d-flex flex-column'>
                    <img src={logo} alt="" className='w-25' />
                    <img src={banner} alt="" />
                </div>

                <div className=''>
                    <Outlet></Outlet>

                </div>

                </div>
                

            </div>
          
        </div>
    );
};

export default main;