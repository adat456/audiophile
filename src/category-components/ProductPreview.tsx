import React from "react";
import { Link } from "react-router-dom";
import widths from "../shared_components/Widths";

interface Props {
    newProd: boolean,
    name: string,
    desc: string,
    category: string,
    slug: string
    image: object,
}

const ProductPreview: React.FC<Props> = ({ newProd, name, desc, category, slug, image }) => {

    let imageSizes: string[];
    let filePaths: object;
    if (image) {
        imageSizes = Object.keys(image);

        imageSizes.forEach(key => {
            let originalFilePath: string = image[key];
            let adjustedFilePath: string = originalFilePath.slice(1);
            filePaths = {
                ...filePaths,
                [key]: adjustedFilePath,
            };
        });
    };

    return (
        <section className="product-preview">
            <picture>
                <source srcSet={filePaths?.desktop} media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet={filePaths?.tablet} media={`(min-width: ${widths.mobileCutoff}`} />
                <img src={filePaths?.mobile} alt={name}/>
            </picture>
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