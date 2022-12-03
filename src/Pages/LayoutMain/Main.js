import React from "react";
import logo from "../../assets/image/title.png";
import banner from "../../assets/image/banner.png";
import { Outlet } from "react-router-dom";


const main = () => {
  return (
    <div>
      <div className="container  ">
        <div className="  d-xxl-flex d-md-flex align-items-center">
          <div className="   ">
            <img src={logo} alt="" className="img-fluid" />
            <img src={banner} alt="" />
          </div>

          <div className="shadow p-3 mb-5 bg-white rounded">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
