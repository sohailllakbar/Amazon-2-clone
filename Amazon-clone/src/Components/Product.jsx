import React, { useContext } from "react";
import styles from "./product.module.css";

import { BasketContext } from "./store/Basketcontext";
const Product = ({ productitem}) => {
  const { description, price, rating, image } = productitem;
  const { dispatch } = useContext(BasketContext);
  const basketAddHandle = () => {
    dispatch({ type: "add to basket", payload: productitem });
  };
  return (
    <div className={styles.product__container}>
      <p className={styles.product__info}>{description}</p>
      <div className={styles.product__price}>
        <small>$</small>
        <strong>{price.toFixed(2)}</strong>
      </div>
      <p className={styles.product__rating}>{"⭐".repeat(rating)}</p>
      <div className={styles.image__container}>
        <img className={styles.product__image} src={image} alt="book" />
      </div>
      <div className={styles.product__btn__container}>
        <button onClick={basketAddHandle} className={styles.product__btn}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
