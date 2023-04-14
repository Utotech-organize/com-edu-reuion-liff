export const available = "available";
export const seatAvailble = "pending";
export const full = "unavailable";
export const complete = "complete";
export const reject = "reject";

//FIXME phuwis do it to globals component

export const exportColorWithStatus = (status: any) => {
  let color = "";
  // if (status === available) {
  //   color = "#FFA800";
  // } else if (status === seatAvailble) {
  //   color = "#9CB0D7";
  // } else if (status === full) {
  //   color = "rgba(255, 202, 24, 0.4)";
  // } else if (status === full) {
  //   color = "rgba(255, 202, 24, 0.4)";
  // } else if (status === full) {
  //   color = "rgba(255, 202, 24, 0.4)";
  // }

  switch (status) {
    case available:
      color = "#FFA800";
      break;

    case seatAvailble:
      color = "#9CB0D7";
      break;

    case full:
      color = "rgba(255, 202, 24, 0.4)";
      break;

    case complete:
      color = "green";
      break;

    case reject:
      color = "red";
      break;

    default:
      color = "white";
      break;
  }

  return color;
};
