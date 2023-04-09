import React from "react";
import section from "../Img/section.png";
import "../Componet/About.css";

const About = () => {
  return (
    <section className=" images">
      <div className="container">
        <h4 className="aboutFood text-center pt-4 pb-3">About Food Forage</h4>
        <div className="row pb-3">
          <div className="col-md-6 text-center col-sm-12 col-lg-4 ">
            <img className="about" src={section} alt="food photo" />
          </div>
          <div className="col-md-6 col-ms-12 col-lg-8 p-4">
            <p className="distribution">
              Food Forage is a distrubutor of raw and processed farm produce.
            </p>
            <p>
              We sort for the beat agriculturalfood produce, then make it
              availablefor consumption locally and abroad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
