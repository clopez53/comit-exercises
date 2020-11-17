import React, { FunctionComponent } from "react";

export interface Product {
    name: string;
    description: string;
    price?: number;
}

const ProductComponent : FunctionComponent<Product> = (prop) => (
    <div>
        <div>Product Name: {prop.name}</div>
        <div>Product Description: {prop.description}</div>
        <div>Product Price: {prop.price}</div>
    </div>
)

ProductComponent.defaultProps = {
    price: 0
}

export default ProductComponent;