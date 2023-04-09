import React from "react";
import Passion from "../Img/Passion.png";
import "../Componet/mission.css";

const Mission = () => {
  return (
    <div className="mission">
      <section className="">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-4 text-center col-sm-12  col-lg-6">
              <img src={Passion} className="about" alt="food " />
            </div>
            <div className="col-md-8 col-ms-12 p-3 col-lg-6">
              <h4 className="distribution text-center mt-3">Our Mission</h4>
              <p className="pt-4 mb-1">
                Our mission is to help our customers source for raw agricultural
                produce and to make it readily available for consumption both
                locally and abroad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
