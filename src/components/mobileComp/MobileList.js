import React from "react";
import "./mobileList.css";

export default function MobileList(props) {
  const {deviceName, price, imgUrl} = props; // destructuring the props
  return (
    <div className="wrapper">
      {console.log(props)}
      <img src={imgUrl} alt="mobile" />

      <div>
        <p>{deviceName}</p>
        <p>₹ {price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
