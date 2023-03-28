import React from "react";
import { Link } from "react-router-dom";

interface Props {
    newProd: boolean,
    name: string,
    desc: string,
    image: string,
    slug: string
}

const ProductPreview: React.FC<Props> = ({ newProd, name, desc, image, slug }) => {
    return (
        <section className="product-preview">
            <img src={image} alt={name} />
            <div className="product-preview-desc">
                <h3>{newProd ? "NEW PRODUCT" : ""}</h3>
                <h2>{name?.toUpperCase()}</h2>
                <p>{desc}</p>
                <a href="">SEE PRODUCT</a>
            </div>     
        </section>
    );
};

export default ProductPreview;