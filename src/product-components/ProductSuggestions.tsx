import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProductSuggestions: React.FC<{suggestions: object[]}> = ({suggestions}) => {

    const suggestionsArr = suggestions?.map((item) => {
        
        let category;
        const slugArr = item.slug.split("-");
        switch (slugArr[slugArr.length - 1]) {
            case "speaker":
                category = "speakers";
                break;
            case "headphones":
                category = "headphones";
                break;
            case "earphones":
                category = "earphones";
                break;
            default:
                console.log("Category not found.");
        };

        return (
            <div key={uuidv4()}>
                <img src="" alt={item.name} />
                <p>{item.name}</p>
                <Link to={`/${category}/${item.slug}`}>SEE PRODUCT</Link>
            </div>
        );
    });

    return (
        <section className="product-suggestions">
            <h2>YOU MAY ALSO LIKE</h2>
            {suggestionsArr}
        </section>
    );
};

export default ProductSuggestions;