import Shipping from "../assets/images/Shipping.svg";
import EmailPhone from "../assets/images/EmailPhone.svg";
import Invoice from "../assets/images/Invoice.svg";
import Qliro from "../assets/images/Qliro.svg"
import Visa from "../assets/images/VISA.png"
import Paypal from "../assets/images/Paypal.png"
import Trustly from "../assets/images/Trustly.svg"
import Amex from "../assets/images/AMEX.png"
import Sweden from "../assets/images/Svenska.svg"
import Norway from "../assets/images/Norska.svg"
import Uk from "../assets/images/uk.svg"

export const customerDetailsIcon = (header) => {
  switch (header) {
    case "Contact":
      return EmailPhone;
    case "Shipping address":
      return Shipping;
    case "Invoice address":
      return Invoice;
    default:
      return null;
  }
};

export const paymentIcon = (payment) => {
  switch (payment) {
    case "Qliro":
      return Qliro;
    case "Visa":
      return Visa;
    case "American Express":
      return Amex;
    case "Paypal":
      return Paypal;
    case "Trustly":
      return Trustly;
    default:
      return null;
  }
};

export const countryIcon = (country) => {
  switch (country) {
    case "Se":
      return Sweden;
    case "Uk":
      return Uk;
    case "No":
      return Norway;
    default:
      return null;
  }
};
