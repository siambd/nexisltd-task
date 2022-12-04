import React from "react";
import logo from "../../assets/image/title.png";
import banner from "../../assets/image/banner.png";
import { Outlet } from "react-router-dom";
import './Main.css'


const main = () => {
  return (
    <div>
      <div className="container  ">
        <div className="  d-xxl-flex d-md-flex align-items-center">
          <div className="   ">
            <img src={logo} alt="" className="img-fluid" />
            <img src={banner} alt="" />
          </div>

          <div className="">
          <div className=" shadow p-3 bg-white rounded mt-5">
            <Outlet></Outlet>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
