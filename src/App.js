import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Cart from "./components/Cart/Cart";
import NotMatched from "./components/NotMatched/NotMatched";
import Review from "./components/Review/Review";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order-review">
            <Review></Review>
          </Route>
          <Route path="/product/:ProductKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
