import React from "react";
import styles from "./VerticalTag.module.scss";
import Upsell from "../../../assets/images/Upsell.svg";
import { orderColorPicker } from "../../ColorPicker";

const VerticalTag = ({ order }) => {
  const background = orderColorPicker(order?.order_type)?.background;
  const color = orderColorPicker(order?.order_type)?.color;
  return (
    <div>
      <div
        className={styles.orderTypeTag}
        style={{ backgroundColor: background, color: color }}
      >
        <span>{order.order_type}</span>
      </div>
      {order.flagged && (
        <img className={styles.flag} src={Upsell} alt="flag"></img>
      )}
    </div>
  );
};

export default VerticalTag;
