/* REACT */
import { useState } from "react";

/* CSS */
import styles from "../../css/shop.module.css";

/* COMPONENTS */
import Sidebar from "./Sidebar";
import Products from "./Products";

/* MAIN */
const Shop = ({ setSelectedItem }) => {
  const [selectedCategory, setSelectedCategory] = useState("Protein Shake");

  const handleClick = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className={styles.shopWrapper}>
      <div className={styles.shopContainer}>
        <Sidebar handleClick={handleClick} />
        <div className="productsWrapper">
          <h2>{selectedCategory}</h2>
          <Products
            selectedCategory={selectedCategory}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
