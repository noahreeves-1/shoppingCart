/* REACT */
import { Link } from "react-router-dom";
import { useState } from "react";

/* CSS */
import styles from "../../css/sidebar.module.css";

/* COMPONENTS */
// import products from "../data/productsList";
import categories from "../data/productCategories";

const Sidebar = ({ handleClick }) => {
  const productCategories = categories.map((category) => {
    return (
      <div key={category} onClick={() => handleClick(category)}>
        <Link to={`/shop/${category}`}>
          <div className="productCategory">{category}</div>
        </Link>
      </div>
    );
  });

  return (
    <div className={styles.sidebarWrapper}>
      <div className="sidebarContainer">{productCategories}</div>
    </div>
  );
};

export default Sidebar;
