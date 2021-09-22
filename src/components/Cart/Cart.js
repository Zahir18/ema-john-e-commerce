import React from "react";

import "./Cart.css";

const Cart = (props) => {
  const crt = props.cart;
  //const totalPrice = cart.reduce((totalPrice,prd)=>prd.price+totalPrice,0)
  let total = 0;
  for (let i = 0; i < crt.length; i++) {
    const prod = crt[i];
    total = total + prod.price * prod.quantity;
  }
  let shipping = 0;
  if (total <= 50) {
    shipping = 0;
  } else if (total > 50) {
    shipping = 5;
  } else if (total > 100) {
    shipping = 10;
  }

  return (
    <div className="cart-div">
      <h2>Order Summary</h2>
      <p>Items Ordered: {crt.length}</p>
      <p>Items: {total.toFixed(2)}</p>
      <p>Shipping Charge: {shipping.toFixed(2)}</p>
      <p>Total Price: {(total + shipping).toFixed(2)}</p>
      {props.children}
    </div>
  );
};

export default Cart;
