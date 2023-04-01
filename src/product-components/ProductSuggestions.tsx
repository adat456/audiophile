import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import widths from "../shared_components/Widths";

const ProductSuggestions: React.FC<{suggestions: object[]}> = ({suggestions}) => {

    const trimmedSuggestions: object = {
        0: {},
        1: {},
        2: {},
    };

    function trimSuggestionFilePaths(array: object[]) {
        suggestions.forEach((suggestion, index) => {
            const entries = Object.entries(suggestion.image);
            entries.forEach(entry => {
                const modifiedFilePath = entry[1].slice(1);
                trimmedSuggestions[index][entry[0]] = modifiedFilePath;
            });
        });
    };

    if (suggestions) trimSuggestionFilePaths(suggestions);

    const suggestionsArr = suggestions?.map((item, index) => { 
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
        }

        return (
            <div className="suggestion" key={uuidv4()}>
                <picture>
                    <source srcSet={trimmedSuggestions[index].desktop} media={`(min-width: ${widths.tabletCutoff}`} />
                    <source srcSet={trimmedSuggestions[index].tablet} media={`(min-width: ${widths.mobileCutoff}`} />
                    <img src={trimmedSuggestions[index].mobile} alt="" />
                </picture>             
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