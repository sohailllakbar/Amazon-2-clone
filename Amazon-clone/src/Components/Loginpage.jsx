import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginpage.module.css";

import { motion } from "framer-motion";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      if (isSignUp) {
        // Sign up new user
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        // Log in existing user
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/");
      }
    } catch (err) {
      console.error("Auth error:", err); // Log the full error
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/email-already-in-use" && isSignUp) {
        setError("An account with this email already exists.");
      } else {
        setError("Error: " + err.message);
      }
    }
  };

  return (
    <motion.div

    initial={{ y: -130, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.1,
      y: { type: "spring", stiffness: 60 },
      opacity: { duration: 1.4 },
      ease: "easeIn",
      duration: 0.3,
    }}
    
    className={styles.login__parent__container}>
      <div className={styles.amazon__login__logo__container}>
        <img
          className={styles.amazon__logo__image}
          src="/picture/amazonlogo.jpg"
          alt="amazon-logo"
        />
      </div>

      <div className={styles.login__form__container}>
        <h1 className={styles.sign__heading}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form className={styles.form__div} onSubmit={handleLogin}>
          <div className={styles.email__container}>
            <label className={styles.email__label}>E-mail</label>
            <input
              className={styles.input__field}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.password__container}>
            <label className={styles.password__label}>Password</label>
            <input
              className={styles.password__field}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className={styles.error__message}>{error}</p>}
          <button className={styles.login__btn} type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className={styles.create__acount__text}>
          {isSignUp ? "Already have an account?" : "Not registered?"}
        </p>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className={styles.toggle__btn}
        >
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </div>
    </motion.div>
  );
};

export default Loginpage;
