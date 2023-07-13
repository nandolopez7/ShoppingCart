import React from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters.jsx";
import { Cart } from "./components/Cart";


function App() {
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header  />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
