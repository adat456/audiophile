import React from "react";
import { Link } from "react-router-dom";

interface Props {
    newProd: boolean,
    name: string,
    desc: string,
    category: string,
    slug: string
}

const ProductPreview: React.FC<Props> = ({ newProd, name, desc, category, slug }) => {
    return (
        <section className="product-preview">
            <img alt={name} />
            <div className="product-preview-desc">
                <h3>{newProd ? "NEW PRODUCT" : ""}</h3>
                <h2>{name?.toUpperCase()}</h2>
                <p>{desc}</p>
                <Link to={`/${category}/${slug}`}>SEE PRODUCT</Link>
            </div>     
        </section>
    );
};

export default ProductPreview;