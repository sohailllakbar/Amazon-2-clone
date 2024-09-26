import React, { useContext } from "react";
import styles from "./Basket.module.css";
import { BasketContext } from "./store/Basketcontext";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basketstate, dispatch } = useContext(BasketContext);
  const totalPrice = basketstate.reduce((acc, item) => acc + item.price, 0);

  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/paymentproceed");
  };

  return (
    <div className={styles.parent__container}>
      <div className={styles.bakste__ad__container}>
        <img
          className={styles.amazon__ad}
          src="/picture/amazon-ad3.jpg"
          alt="amazon-ad"
        />
        <h2 className={styles.shopping__heading}>Your Shopping Basket</h2>
        {basketstate.map((item) => {
          return (
            <div className={styles.basket__product__container}>
              <div className={styles.image__product}>
                <img
                  className={styles.basket__image}
                  src={item.image}
                  alt="image"
                />
              </div>
              <div className={styles.product__info}>
                <p className={styles.info__description}>{item.description}</p>
                <div>
                  <small className={styles.info__price__dollar}>$</small>
                  <strong className={styles.info__price__number}>
                    {item.price}
                  </strong>
                </div>

                <div className={styles.star__container}>
                  {"⭐".repeat(item.rating)}
                </div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "remove from basket",
                      payload: { id: item.id },
                    });
                  }}
                  className={styles.info__button}
                >
                  Remove From Basket
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.parent__subtotal__container}>
        <p className={styles.subtotal__para}>
          Subtotal ({basketstate.length} items): <strong>${totalPrice}</strong>
        </p>
        <small className="subtotal__gift">
          <input className={styles.subtotol__input} type="checkbox" /> This
          order contains a gift
        </small>

        <button onClick={goToPage} className={styles.subtotal__btn}>
          Proceed{" "}
        </button>
      </div>
    </div>
  );
};

export default Basket;
