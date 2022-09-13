// import products from "../data/productsList";

/* CSS */
import styles from "../../css/shoppingcart.module.css";

const ShoppingCart = ({ cartItems }) => {
  // not working... how can i loop through both arrays??
  // how can I check if something exists in an array?
  const totalNumberOfItems = cartItems.length;

  const uniqueProductsArray = [];
  const uniqueProducts = cartItems.map((eachProduct) => {
    if (!uniqueProductsArray.includes(eachProduct)) {
      uniqueProductsArray.push(eachProduct);
      return (
        <div key={eachProduct.id}>
          {eachProduct.name}
          {eachProduct.price}
        </div>
      );
    } else {
      return "";
    }
  });

  const frequency = cartItems
    .map((item) => item.name)
    .reduce((total, name) => {
      const count = total[name] || 0;
      total[name] = count + 1;
      return total;
    }, {});
  const productCounts = uniqueProductsArray.map((eachItem) => {
    if (frequency[eachItem.name]) {
      return (
        <div key={eachItem.id}>
          <div>{frequency[eachItem.name]}</div>
        </div>
      );
    } else {
      return console.log("Couldn't find items");
    }
  });

  return (
    <div>
      <div className={styles.cartItemsWrapper}>
        <div className={styles.shoppingCartTitle}>Shopping Cart</div>
        <div className="totalItemsCount">
          Total number of items: {totalNumberOfItems}
        </div>
        <div className={styles.productsAndCountWrapper}>
          <div>{uniqueProducts}</div>
          <div>{productCounts}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
