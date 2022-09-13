import penrose from "../images/penrose.jpeg";
import storeIcon from "../images/icon-store.svg";
import shoppingCartIcon from "../images/icon-shopping-cart.svg";
import { Link } from "react-router-dom";
import productsList from "./data/productsList";

const Nav = () => {
  const firstCategory = productsList[0].category;

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <Link to="/">
          <button className="go-home-button">
            <img
              className="company-logo"
              src={penrose}
              alt="company-logo"
            ></img>
            <div className="company-name">Penrose</div>
          </button>
        </Link>
        <div className="nav-options-container">
          <Link to={`/shop/${firstCategory}`}>
            <button className="store-icon-button">
              <img src={storeIcon} alt="shop-icon-button"></img>
            </button>
          </Link>
          <Link to="/shoppingCart">
            <button className="shopping-cart-icon-button">
              <img src={shoppingCartIcon} alt="shopping-cart-icon"></img>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
