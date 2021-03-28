import React from "react";
import styles from "./CustomerDetails.module.scss";
import { customerDetailsIcon } from "../../../components/IconFinder";
import IconText from "../../../components/UIElements/IconText/IconText";

const CustomerDetails = ({ header, line1, line2 }) => {
  const icon = customerDetailsIcon(header);
  return (
    <div className={styles.customerDetails}>
      <IconText icon={icon} text={header} />
      <p className={styles.body}>{line1}</p>
      <p className={styles.body}>{line2}</p>
    </div>
  );
};

export default CustomerDetails;
