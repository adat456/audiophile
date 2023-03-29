import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
    features: string,
    includedItems: object[],
}

const ProductDetails: React.FC<Props> = ({ features, includedItems }) => {

    const includedItemsArr = includedItems?.map((item) => {
        return (
            <div key={uuidv4()} className="included-item">
                <p className="quantity">{`${item.quantity}x`}</p>
                <p>{item.item}</p>
            </div>
        );   
    });

    return (
        <div className="product-details">
            <div className="product-features">
                <h2>FEATURES</h2>
                <p>{features}</p>
            </div>
            <div className="product-includes">
                <h2>IN THE BOX</h2>
                {includedItemsArr}
            </div>
        </div>
    );
};

export default ProductDetails;