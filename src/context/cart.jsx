import React from "react";
import { createContext, useState } from "react";

// 1. Create context
// This is the context to consume
export const CartContext = createContext();

// 2. Create provider, to provide context
// This provides access to the context
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //If producto is not in the cart
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    const currentQuantity = cart[productInCartIndex].quantity;

    if (currentQuantity > 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;
      setCart(newCart);
    }

    if (currentQuantity === 1) {
      setCart((prevState) =>
        prevState.filter((item) => item.id !== product.id)
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
