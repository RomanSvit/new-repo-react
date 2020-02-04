import React from "react";
const choosePriority = param => {
  let border;
  switch (param) {
    case "low":
      border = { border: "1px solid blue" };
      break;
    case "high":
      border = { border: "1px solid red" };
      break;
    default:
      border = { border: "1px solid green" };
      break;
  }
  return border;
};
const WishListItem = ({ wish, date, onDeleteWish, id, priority }) => {
  const styles = choosePriority(priority);
  console.log(priority);
  return (
    <li style={styles}>
      <h2>{wish}</h2>
      <p>{date}</p>
      <button type="button" onClick={() => onDeleteWish(id)}>
        delete
      </button>
    </li>
  );
};
export default WishListItem;
