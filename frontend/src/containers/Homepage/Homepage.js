import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <Row className={styles.container}>
      <Col span={24}>
        <Link to="/customer/12345678910">
          <div className={styles.btnContainer}>
            <Button type="text">Enter</Button>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Homepage;