import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Alert, Divider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import styles from "./Customer.module.scss";
import * as actions from "./redux/actions";

import SpinLoader from "../../components/UIElements/SpinLoader/SpinLoader";
import CustomerTable from "./CustomerTable/CustomerTable";
import CustomerDetails from "./CustomerDetails/CustomerDetails";

const Customer = () => {
  const { results, loading, error } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const { customerId } = useParams();

  useEffect(() => {
    dispatch(actions.getCustomer(customerId));
  }, [customerId]); // eslint-disable-line

  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        {error && (
          <Col span={24}>
            <Alert message="Something went wrong" type="error" />
          </Col>
        )}
        <Col span={24}>
          {loading ? (
            <SpinLoader />
          ) : (
            <div>
              <Row>
                <Col span={24}>
                  <p
                    className={styles.header}
                  >{`${results?.attributes?.first_name} ${results?.attributes?.last_name} (${results?.attributes?.person_number})`}</p>
                </Col>
              </Row>
              <Row className={styles.customerDetailsContainer}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <CustomerDetails
                    header={"Contact"}
                    line1={results?.attributes?.email}
                    line2={results?.attributes?.phone_number}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <CustomerDetails
                    header={"Shipping address"}
                    line1={
                      results?.attributes?.address &&
                      `${results?.attributes?.address},`
                    }
                    line2={`${results?.attributes?.postcode} ${results?.attributes?.city}`}
                  />
                </Col>
                <Col xs={24} sm={20} md={12} lg={8} xl={8}>
                  <CustomerDetails
                    header={"Invoice address"}
                    line1={
                      results?.attributes?.address &&
                      `${results?.attributes?.address},`
                    }
                    line2={`${results?.attributes?.postcode} ${results?.attributes?.city}`}
                  />
                </Col>
                <Divider />
              </Row>
              <Row className={styles.customerTable}>
                <Col span={24} className={styles.customerTableHeader}>
                  <p className={styles.customerTableHeaderText}>
                    {results?.attributes?.first_name &&
                      `${results?.attributes?.first_name}'s orders`}
                  </p>
                  <div>
                    <InfoCircleOutlined className={styles.helpIcon} />{" "}
                    <span className={styles.helpText}>Help</span>
                  </div>
                </Col>
                <Col span={24}>
                  <CustomerTable orders={results?.attributes?.orders} />
                </Col>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Customer;
