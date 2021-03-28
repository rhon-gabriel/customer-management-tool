import React from "react";
import styles from "./IconText.module.scss";

const IconText = ({ icon, text }) => {
  return (
    <div className={styles.iconText}>
      <img src={icon} alt="Icon" className={styles.img}></img>
      <span>{text}</span>
    </div>
  );
};

export default IconText;
