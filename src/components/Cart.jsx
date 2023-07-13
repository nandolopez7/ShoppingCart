import React from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons.jsx";
import { useId } from "react";
import "./Cart.css";

export function Cart() {
  const carCheckboxId = useId();

  return (
    <>
      <label htmlFor={carCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={carCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              alt="Iphone"
            />
            <div>
              <strong>Iphone</strong> - $1699
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
              <button>-</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
