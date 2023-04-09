import React from "react";
import backgroundImage from "../Img/background.png";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="container mt-2 p-5 w-100">
          <div className="row">
            <div className="col-md-4 col-ms-6 col-sm-9 col-mb-4">
              <h1 className="heading text-white">Food Forage</h1>
              <p className="number text-white">Your Number 1 Online</p>
              <p className="agricultural text-white">
                Agricultural Food Produce Store
              </p>
              <button className="btn btn-success btn Navbar2" type="submit">
                shop now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
