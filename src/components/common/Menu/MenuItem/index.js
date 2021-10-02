import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartAddItem,
  cartRemoveItem,
} from "../../../../redux/cart/cart.action";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../../redux/cart/cart.selector";

import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./styles.css";

const MenuItem = ({ item }) => {
  const { cartCount, cartList, cartTotal } = useSelector(
    createStructuredSelector({
      cartCount: selectCartItemsCount,
      cartList: selectCartItems,
    })
  );
  const dispatch = useDispatch();
  const { id, img, name, price, info } = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className="item">
      <img src={img} alt="food" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(cartRemoveItem(item))}
          handleAddItem={() => dispatch(cartAddItem(item))}
        />
      </div>
    </div>
  );
};

export default MenuItem;
