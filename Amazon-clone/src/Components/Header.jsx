
import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { BasketContext } from "./store/Basketcontext";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { productData1, productData2, productData3, productData4 } from "./productdata";

const allProductData = [...productData1, ...productData2, ...productData3, ...productData4];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProductData);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(allProductData);
    } else {
      const filtered = allProductData.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      console.log("Filtered Products: ", filtered); // Debugging log
    }
  }, [searchQuery]);

  const { basketstate } = useContext(BasketContext);
  const [user, setUser] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // This will trigger the Navbar to update
    } catch (err) {
      console.error("Sign Out Error:", err);
    }
  };

  return (
    <div className={styles.header__container}>
      <div className={styles.logo__container}>
        <div className={styles.header__logo__container}>
          <Link to="/">
            <img
              style={{ width: "90px", height: "100%", position: "relative" }}
              className={styles.header__logo}
              src="/picture/amazon-logo.jpg"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className={styles.search__header}>
        <input
          type="search"
          className={`${styles.search__input} ${isFocus ? styles.border__input : ""}`}
          placeholder="Search Amazon"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon
          style={{
            width: "39px",
            height: "39px",
            cursor: "pointer",
            border: "2px solid #ee940c",
          }}
          className={styles.header__search__icon}
        />
      </div>
      <div className={styles.header__options}>
        <div>
          {user ? (
            <span
              onClick={handleSignOut}
              className={`${styles.sign__option} ${styles.header__text__options}`}
            >
              Sign Out
            </span>
          ) : (
            <Link to="/loginpage">
              <button
                className={`${styles.sign__option} ${styles.header__text__options}`}
              >
                Sign In
              </button>
            </Link>
          )}
        </div>

        <div>
          <span
            className={`${styles.return__option} ${styles.header__text__options}`}
          >
            Returns
          </span>
          <span
            className={`${styles.order__option} ${styles.header__text__options}`}
          >
            & Orders
          </span>
        </div>
        <div>
          <span
            className={`${styles.yourtext__option} ${styles.header__text__options}`}
          >
            Your
          </span>
          <span
            className={`${styles.prime__option} ${styles.header__text__options}`}
          >
            Prime
          </span>
        </div>
        <div>
          <Link to="/basket">
            <MdOutlineShoppingBasket
              className={`${styles.basketball__option} ${styles.header__text__options}`}
            />
          </Link>
          <span
            className={`${styles.numbertext__option} ${styles.header__text__options}`}
          >
            {basketstate.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

