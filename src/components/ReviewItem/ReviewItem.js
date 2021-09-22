import { faCloudMoonRain } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  console.log(props);
  const divStyle = {};

  const { quantity, name, star, key, price } = props.prod;
  return (
    <div className="reviewItem">
      <h3>{name}</h3>
      <p>Quantity:{quantity}</p>
      <p>Rate:{star}</p>
      <p>Price:$ {price}</p>
      <br />
      <button className="cart-btn" onClick={() => props.productRemove(key)}>
        Remove Item
      </button>
    </div>
  );
};

export default ReviewItem;
