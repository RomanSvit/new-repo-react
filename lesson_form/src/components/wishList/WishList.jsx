import React from "react";
import WishListItem from "../wishList_item/WishListItem";
const WishList = ({ data, onDeleteWish }) => (
  <ul>
    {data.map(elem => (
      <WishListItem key={elem.id} {...elem} onDeleteWish={onDeleteWish} />
    ))}
  </ul>
);

export default WishList;
