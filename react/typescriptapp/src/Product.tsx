import React, { useState, useContext } from "react";
import IProduct from "./types/IProduct";
import {Cart} from "./App"

interface ProductProps {
    product: IProduct;
}

const Product = ({product}: ProductProps) => {

    const myCart = useContext(Cart);
    const [quantity, setQuantity] = useState<number>(0);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(+event.target.value);
    }

    const handleAddClick = () => {
        myCart.updateCart(myCart.total + product.unitPrice * quantity);
    }

    return <div>
            <div>Name: {product.name}</div>
            <div>Description: {product.description}</div>
            <div>UnitPrice: { new Intl.NumberFormat('en-CA', {style:'currency', currency:'CAD'}).format(product.unitPrice)}</div>
            <div><input type="number" value={quantity} onChange={handleQuantityChange} /></div>
            <div><button onClick={handleAddClick}>Add Item</button></div>         
          </div>
}

export default Product;