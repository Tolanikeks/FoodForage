import React from "react";
import Logo from "../Img/Logo 2 1.png";
import "../Componet/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="foot">
          <div className="footerlogo">
            <img src={Logo} width="100" alt="" />
          </div>
          <div className="">
            <h6 className="Home">Home</h6>
            <h6 className="About">About</h6>
            <h6>Our Product</h6>
          </div>
          <div className="Company">
            <h6>Our Company</h6>
            <h6>Our Mission</h6>
            <h6>Our Vision</h6>
          </div>
          <div className="What">
            <h6>What we do</h6>
            <h6>Contact Us</h6>
            <h6>Chat with Us</h6>
          </div>
        </div>
        <hr className="color" />
        {/* </div> */}
      </footer>
    </div>
  );
};

export default Footer;
