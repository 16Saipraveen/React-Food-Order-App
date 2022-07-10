import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { CartIcon } from "../Cart";
import { CartContext } from "../store";

export const CartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
