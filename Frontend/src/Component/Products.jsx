import React from "react";
import ProdCards from "./ProdCards";
import usefetchProduct from "../utils/usefetchProduct";

const Products = () => {
  const { productData } = usefetchProduct();

  return productData.length === 0 ? (
    <h1>Conditional rendring</h1>
  ) : (
    <>
      <div className="productContainer flex flex-wrap justify-center gap-5 mt-[50px]">
        {productData.map((items) => {
          return <ProdCards key={items.id} productData={items} />;
        })}
      </div>
    </>
  );
};

export default Products;
