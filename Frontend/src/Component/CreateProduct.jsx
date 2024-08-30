import React, { useState } from "react";

const CreateProduct = () => {
  const [productData, setproductData] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setproductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(productData),
  };
  const createProduct = async () => {
    const { productName, productPrice, productCategory } = productData;
    if (!productName || !productPrice || !productCategory) {
      return alert("please fill all the fileds");
    }
    const response = await fetch(
      `http://localhost:4040/v1/products/createProduct`,
      options
    );
    const json = await response.json();
    console.log(json);
    if (json?.status) {
      alert("Product Creatd Successfully");
    }
  };
  return (
    <>
      <div className="w-[40%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block" htmlFor="productName">
              ProductName
            </label>
            <input
              className="w-full bg-gray-100 py-2 px-2 mt-2"
              type="text"
              placeholder="productname"
              name="productName"
              value={productData.productName}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="productPrice">
              Price
            </label>
            <input
              className="w-full bg-gray-100 py-2 px-2 mt-2"
              type="number"
              placeholder="Price"
              name="productPrice"
              value={productData.productPrice}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="productCategory">
              ProductCategory
            </label>
            <input
              className="w-full bg-gray-100 py-2 px-2 mt-2"
              type="text"
              placeholder="productcategory"
              name="productCategory"
              value={productData.productCategory}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="block" htmlFor="productImage">
              productImage
            </label>
            <input type="file" />
          </div>
          <button
            onClick={createProduct}
            className="mt-4 w-full cursor-pointer bg-purple-500 py-2 rounded-lg text-white font-bold"
          >
            Create Product
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
