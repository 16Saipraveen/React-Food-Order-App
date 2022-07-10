import React from "react";

export const CartContext = React.createContext({
  items: [],
  toatalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
