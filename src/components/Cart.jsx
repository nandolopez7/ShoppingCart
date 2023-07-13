import React from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons.jsx";
import { useId } from "react";
import { useCart } from "../hooks/useCart.jsx";
import "./Cart.css";

function CartItem({thumbnail, price, title, quantity, addToCart, removeFromCart}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />

      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small >Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>-</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, removeFromCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
