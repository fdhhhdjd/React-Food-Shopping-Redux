import React, { useContext } from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import EmptyCart from "../../components/Cart/EmptyCart";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import { ChooseFood } from "../../Context/ChooseFood";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import "./styles.css";

const Cart = () => {
  const { cartCount, cartList, cartTotal } = useSelector(
    createStructuredSelector({
      cartCount: selectCartItemsCount,
      cartList: selectCartItems,
      cartTotal: selectCartTotal,
    })
  );
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
