import React from "react";
import { CiStar } from "react-icons/ci";

const ProdCards = ({ productData }) => {
  const { title, brand, price, description, rating } = productData;
  return (
    <>
      <div className="w-[20rem] min-h-[30vh] border hover:shadow-md rounded-lg cursor-pointer p-4">
        <img className="w-full" src={productData.images[0]} alt="" />
        <div>
          <h3 className="font-bold">
            {brand} - {title}
          </h3>
          <h3 className="my-3">{description}</h3>
          <div className="flex items-center justify-between font-bold ">
            <h4>INR ${price}</h4>
            <div className="flex items-center space-x-2 ">
              <CiStar />
              <h4>{rating}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdCards;
