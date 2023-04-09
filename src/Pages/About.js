import React from "react";
import Logo from "../Img/Logo 2 1.png";
import Mission from "../Componet/Mission";
import Vission from "../Componet/Vission";
import Footer from "../Componet/Footer";

const About = () => (
  <>
    <section className=" mt-2 p-5 w-100">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 col-mb-8">
          <h4 className="heading text-dark ">Who are We</h4>
          <p className="number text-dark p-3">
            We are distributors and exporters of African/ Rough foods, Nuts,
            Agro Products and we make then readily available for delivery. We
            sort for the best agricultural food produce, then make it available
            for consumption locally and abroad.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-mb-4 foodforage">
          <img className="foodlogo" src={Logo} alt="" />
        </div>
      </div>
    </section>
    <Mission />
    <Vission />
    <Footer />
  </>
);

export default About;
