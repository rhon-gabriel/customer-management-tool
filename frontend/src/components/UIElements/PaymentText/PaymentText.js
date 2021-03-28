import React from "react";
import styles from "./PaymentText.module.scss";

const PaymentText = ({ icon, text }) => {
  return (
    <div className={styles.iconText}>
      <div className={styles.iconContainer}>
        <img src={icon} alt="Icon" className={styles.img}></img>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default PaymentText;
