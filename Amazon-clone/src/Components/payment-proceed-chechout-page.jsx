import React, { useContext } from "react";
import styles from "./paymentproceed.module.css";
import { BasketContext } from "./store/Basketcontext";

const PaymentProceed = () => {
  const { basketstate, dispatch } = useContext(BasketContext);

  return (
    <div className={styles.payment}>
      <div className={styles.payment__container}>
        <h1>Checkout ({basketstate?.length}) items</h1>
        {/* Payment section - delivery address */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3 className={styles.delivery__address}>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>sohailakbar494@gmail.com</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
                    <p className={styles.info__description}>
                      {item.description}
                    </p>
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
        </div>
      </div>
    </div>
  );
};

export default PaymentProceed;
