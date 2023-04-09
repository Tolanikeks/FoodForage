import React from "react";
import Vision from "../Img/Vision.png";
import "../Componet/Vision.css";

const Vission = () => {
  return (
    <div>
      <div className="vission ">
        <section className="container mt-2 p-3">
          <div className="row g-5 ">
            <div className="col-md-6 col-lg-6 col-ms-12 pt-3">
              <h4 className="distribution text-center ">Our Vision</h4>
              <p className="pt-2">
                Our Vision Our vision is to be recognised as one of the top
                distributors of farm produce in our society as well as worldwide
                in the agro food produce sector is concern.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 pt-2">
              <img src={Vision} className="vision1" alt="food " />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vission;
