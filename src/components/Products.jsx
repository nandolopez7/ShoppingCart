import React from 'react';
import "./Products.css";
import { AddToCartIcon } from "./Icons.jsx";

export function Products({ products }) /* Esto es para listar los productos */ {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(product /* con esto poblamos los productos */ => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
                <button>
                    <AddToCartIcon />
                </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
