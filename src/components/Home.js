/* REACT */
import { Link } from "react-router-dom";

/* COMPONENTS */
import productsList from "./data/productsList";

/* IMAGES */
import background from "../images/home-background.jpeg";

/* CSS */
import styles from "../css/background.module.css";

const Home = () => {
  const firstCategory = productsList[0].category;

  return (
    <Link to={`/shop/${firstCategory}`}>
      <div className={styles.article}>
        <div className={styles.picture}>
          <img src={background} alt="background"></img>
          <header className={styles.header}>
            Clean, few ingredients, low sugar
          </header>
        </div>
      </div>
    </Link>
  );
};

export default Home;
