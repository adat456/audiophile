import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import widths from "../shared_components/Widths";

const ProductSuggestions: React.FC<{suggestions: object[]}> = ({suggestions}) => {

    // let imageSizes: string[];
    // let filePaths: object[];
    // if (suggestions) {
    //     imageSizes = Object.keys(suggestions);

    //     imageSizes.forEach(key => {
    //         let originalFilePaths: object[] = suggestions[key].image;
    //         let adjustedFilePaths: string = originalFilePath.slice(1);
    //         filePaths = {
    //             ...filePaths,
    //             [key]: adjustedFilePath,
    //         };
    //     });
    // };

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
            <div className="suggestion" key={uuidv4()}>
                <div className="suggestion-img">
                    <img src="" alt={item.name} />
                </div>
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