import React from "react";

import ProductsCard from "./ProductsCard/ProductsCard";

const ProductsCards = (props) => (
  <section className="grid md:grid-cols-4 grid-cols-2 gap-3 mx-2">
    <ProductsCard
      spicelBg="bg-red-500 text-white"
      styleClass="md:col-span-1 col-span-2 bg-linear-black text-white"
    />

    <ProductsCard
      spicelBg="bg-white text-yellow-500"
      styleClass="productsCard bg-linear-yellow text-white"
    />

    <ProductsCard
      spicelBg="bg-white text-red-500"
      styleClass="md:col-span-2 col-span-1 bg-linear-red text-white"
    />

    <ProductsCard
      styleClass="md:col-span-2 col-span-2 bg-linear-gray"
      spicelBg="bg-red-500 text-white"
      spanTxtClass="text-white"
    />

    <ProductsCard
      spicelBg="bg-white text-green-500"
      styleClass="productsCard bg-linear-green text-white"
    />

    <ProductsCard
      spicelBg="bg-white text-blue-500"
      styleClass="productsCard bg-linear-blue text-white"
    />
  </section>
);

export default ProductsCards;
