import React, { useState, useEffect } from 'react'

const usefetchProduct = () => {
    const [productData, setproductData] = useState([]);

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setproductData(json?.products);
    };
    return { productData }
}

export default usefetchProduct