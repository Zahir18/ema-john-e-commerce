import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const ProductDetails = () => {
  const { ProductKey } = useParams();
  const product = fakeData.find((pd) => pd.key === ProductKey);
  console.log(product);
  return (
    <div>
      <h2>Your Details is coming soon.</h2>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
