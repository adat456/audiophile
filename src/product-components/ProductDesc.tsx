import React, { useState } from "react";

interface Props {
    image?: string,
    newProd: boolean,
    name: string,
    desc: string,
    price: number,
    slug: string,
}

const ProductDesc: React.FC<Props> = ({ image, newProd, name, desc, price }) => {
    const [ numItems, setNumItems ] = useState<number>(1)

    return (
        <div className="product-desc">
            <img src={image} alt={name} />
            <div className="product-preview-desc">
                <h3>{newProd ? "NEW PRODUCT" : ""}</h3>
                <h2>{name?.toUpperCase()}</h2>
                <p>{desc}</p>
                <p className="price">{`$${price}`}</p>
                <div className="cart-add">
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDesc;