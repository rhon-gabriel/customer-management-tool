import React from "react";
import styles from "./CustomerTable.module.scss";
import { Table } from "antd";
import moment from "moment";
import "moment/locale/sv";

import VerticalTag from "../../../components/UIElements/VerticalTag/VerticalTag";
import IconText from "../../../components/UIElements/IconText/IconText";
import PaymentText from "../../../components/UIElements/PaymentText/PaymentText";
import Arrow from "../../../assets/images/corner-down-right.svg";
import { paymentIcon, countryIcon } from "../../../components/IconFinder";
import { statusColorPicker } from "../../../components/ColorPicker";

const CustomerTable = ({ orders }) => {
  const columns = [
    {
      title: "",
      dataIndex: ["order_type", "flagged"],
      key: "order_type",
      width: "5%",
      render: (text, order) => <VerticalTag order={order} />,
    },
    {
      title: "Order number",
      dataIndex: "order_number",
      key: "order_number",
      width: "20%",
      render: (text) => (
        <div className={styles.orderNumber}>
          {text}
          <img src={Arrow} alt="arrow" className={styles.img} />
        </div>
      ),
    },
    {
      title: "Created",
      dataIndex: "created_at",
      key: "created_at",
      width: "20%",
      render: (text) => (
        <div>{moment(text).locale("sv").format("DD MMM, HH:mm")}</div>
      ),
    },
    {
      title: "Store",
      dataIndex: ["country", "store"],
      key: "country",
      width: "10%",
      render: (text, order) => (
        <IconText icon={countryIcon(order.country)} text={order.store} />
      ),
    },
    {
      title: "Payment method",
      dataIndex: ["payment_method", "payment_details"],
      key: "payment_method",
      width: "15%",
      render: (text, order) => (
        <PaymentText
          icon={paymentIcon(order.payment_method)}
          text={order.payment_details}
        />
      ),
    },
    {
      title: "Payment status",
      dataIndex: "payment_status",
      key: "payment_status",
      width: "15%",
      render: (status) => (
        <div>
          <span
            className={styles.dot}
            style={{ backgroundColor: statusColorPicker(status) }}
          ></span>
          {status}
        </div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "15%",
      render: (text) => <div>{`${text} kr`}</div>,
    },
  ];

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <div>Back</div>;
    }
    if (type === "next") {
      return <div>Next</div>;
    }
    return originalElement;
  };

  return (
    <div className={"customerTable"}>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="key"
        rowClassName={"customerTableRow"}
        pagination={{ itemRender, pageSize: 5 }}
      />
    </div>
  );
};

export default CustomerTable;
