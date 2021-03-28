import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <HomeOutlined className={styles.icon}/>
      </Link>
    </div>
  );
};

export default Header;
