import React, {FC} from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props {
    productId: string;
}

interface ProductPageProps extends RouteComponentProps<Props> {

}

const ProductPage : FC<ProductPageProps> = (props) => {
    return <div>My Product Id: {props.match.params.productId}</div>
}

export default ProductPage;