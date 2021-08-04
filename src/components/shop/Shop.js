import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const datas = fakeData.slice(0, 10);
  const [product, setProduct] = useState(datas);
  const [cart, setCart] = useState([]);

  const handleCartEvent = (product) => {
    console.log("product additiion done", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product handleCartEvent={handleCartEvent} product={pd}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
