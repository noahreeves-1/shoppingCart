/* REACT */
import { Link } from "react-router-dom";

/* CSS */
import styles from "../../css/products.module.css";

/* COMPONENTS */
import productsList from "../data/productsList";

const Products = ({ selectedCategory, setSelectedItem }) => {
  const products = productsList.map(
    (product) => {
      if (product.category === selectedCategory) {
        return (
          <div
            className="productWrapper"
            key={product.id}
            onClick={() => setSelectedItem(product)}
          >
            <Link to={`/shop/${product.category}/${product.id}`}>
              <div className={styles.productContainer} key={product.id}>
                <img
                  className={styles.productImages}
                  src={product.imageSrc}
                  alt={product.name}
                ></img>
                <div className={styles.productDetails}>{product.name}</div>
                <div className={styles.productFlavor}>{product.flavor}</div>
                <div className={styles.productCompany}>{product.company}</div>
                <div className={styles.productDescription}>
                  {product.description}
                </div>
                <div className={styles.productWeight}>{product.weight}</div>
              </div>
            </Link>
          </div>
        );
      }
      return "";
    }

    // if (product.category === state.selectedCategory) {
    //   return (
    // );
    // }
  );

  return <div className={styles.productsContainer}>{products}</div>;
};

export default Products;
