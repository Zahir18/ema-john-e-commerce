import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, price, seller, stock, name, key } = props.product;
  return (
    <div className="display-product">
      <div className="img-style">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4 className="product-font">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <h4 className="product-font-inside">Price: ${price}</h4>
        <br />
        <h3 className="product-font-inside">
          Only {stock} left in stock-Order Soon.
        </h3>

        {props.showAddToCart === true && (
          <button
            showAddToCart={true}
            onClick={() => props.handleCartEvent(props.product)}
            className="cart-btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
