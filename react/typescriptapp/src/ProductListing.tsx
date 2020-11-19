import React from "react";
import IProduct from "./types/IProduct"
import Product from "./Product"



const ProductListing = () => {
    const products :IProduct[] =
    [
        {name: "Burger", description:"Best burger in town", unitPrice: 3.45},
        {name: "Sandwich", description:"Best sandwich", unitPrice: 5.45},
        {name: "Taco", description:"Best taco in town", unitPrice: 4.55},
    ];

    return <div>{products.map(product => <Product product={product} />)} </div>;
}

export default ProductListing;