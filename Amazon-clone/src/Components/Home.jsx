import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Product from "./Product";
import { motion } from "framer-motion";
import { productData2, productData3, productData4 } from "./productdata";
const imgArray = ["/picture/first.jpg", "/picture/second.jpg"];
export const Home = () => {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const setindex = setInterval(() => {
      setCurIndex((previos) => (previos + 1) % imgArray.length);
    }, 4000);
    return () => clearInterval(setindex);
  }, []);
  return (
    <div className={styles.home__container}>
      <div className={styles.home__image__container}>
        <div
          id="carouselExampleIndicators"
          className={`${styles.main__container} carousel slide`}
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className={styles.button__text}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className={`${styles.super__container} carousel-inner`}>
            <div   className={`${styles.box__main__container} carousel-item active image__container`} >
              <img
                src={imgArray[curIndex]}
                className={`${styles.igm__container} d-block w-100`}
                alt="image"
              />
              <div className={styles.parent__text}>
                <h2 className={styles.text__heading__image}>
                  Discover Your Next Adventure Today
                </h2>
                <h4 className={styles.text__heading2}>
                  Empower Your Dreams Today
                </h4>
                <a className={styles.btn__heading} href="#">
                  Learn More
                </a>
              </div>
            </div>

            <div className={`${styles.box__main__container} carousel-item`} >
              <img src={imgArray[curIndex]} className={`${styles.igm__container} d-block w-100`}  alt="image" />
              <div className={styles.parent__text}>
                <h2 className={styles.text__heading__image}>
                  Unleash Your Potential Today
                </h2>
                <h4 className={styles.text__heading2}>
                  Transform Ideas into Reality Now
                </h4>
                <a className={styles.btn__heading} href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className={`${styles.box__main__container} carousel-item`}>
              <img src={imgArray[curIndex]} className={`${styles.igm__container} d-block w-100`} alt="image" />
              <div className={styles.parent__text}>
                <h2 className={styles.text__heading__image}>
                  Find Your Perfect Fit Now
                </h2>
                <h4 className={styles.text__heading2}>
                  Transform Your Space with Us
                </h4>
                <a className={styles.btn__heading} href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            y: { type: "tween", stiffness: 60 },
            opacity: { duration: 1.1 },
            ease: "easeIn",
            duration: 0.3,
          }}
          className={styles.product__row__2}
        >
          {productData2.map((productitem) => (
            <Product
              productitem={productitem}
              className={styles.product__component}
              key={productitem.id}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "tween", stiffness: 60 },
            opacity: { duration: 1.1 },
            ease: "easeIn",
            duration: 0.3,
          }}
          className={styles.product__row__3}
        >
          {productData3.map((productitem) => (
            <Product
              productitem={productitem}
              className={styles.product__component}
              key={productitem.id}
              price={productitem.price}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "tween", stiffness: 60 },
            opacity: { duration: 1.1 },
            ease: "easeIn",
            duration: 0.3,
          }}
          className={styles.product__row__3}
        >
          {productData4.map((productitem) => (
            <Product
              productitem={productitem}
              className={styles.product__component}
              key={productitem.id}
              price={productitem.price}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
