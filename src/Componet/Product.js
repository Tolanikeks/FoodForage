import React from "react";
import Dry from "../Img/dry.png";
import Garlic from "../Img/garlic.png";
import Cashew from "../Img/cashew.png";
import "../Componet/Product.css";

const Product = () => {
  return (
    <div>
      <section className="container">
        <h4 className="p-4 text-center">Our Product</h4>

        <p className="text-center">
          We make varieties of agricultural food produce (All kinds of Nuts,
          <br />
          Dry Fish,Melon Seeds,br Garlic, Dry plantain, Ginger, Cocoa etc.)
          available for delivery
        </p>

        <div className="product">
          <div className="">
            <img src={Dry} alt="" />
          </div>

          <div className="">
            <img src={Garlic} alt="" />
          </div>

          <div className="">
            <img src={Cashew} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
