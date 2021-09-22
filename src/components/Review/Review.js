import { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import orderPlacedGif from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    removeFromDatabaseCart(productKey);
    setCart(newCart);
  };
  const handleOrderPlace = () => {
    processOrder();
    setCart([]);
    setOrderPlaced(true);
  };
  let happyImage;
  let thankYouNote;
  if (orderPlaced) {
    happyImage = <img src={orderPlacedGif} alt="" />;
    thankYouNote = <h2>Thank You for shopping With Us. </h2>;
  }

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const cartKeys = Object.keys(savedCart);
    const cartProducts = cartKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            prod={pd}
            key={pd.key}
            productRemove={removeProduct}
          ></ReviewItem>
        ))}
        {happyImage}
        {thankYouNote}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleOrderPlace} className="cart-btn">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
