export const orderColorPicker = (orderType) => {
  switch (orderType) {
    case "Online":
      return {
        background: "#d1d1d1",
        color: "#222323",
      };
    case "Instore":
      return {
        background: "#222323",
        color: "#ffffff",
      };
    case "Manual":
      return {
        background: "#f16502",
        color: "#ffffff",
      };
    default:
      return null;
  }
};

export const statusColorPicker = (status) => {
  switch (status) {
    case "Paid":
      return "#64E1C3";
    case "In progress":
      return "#F16500";
    case "Failed":
      return "#FE1B1B";
    default:
      return null;
  }
};
