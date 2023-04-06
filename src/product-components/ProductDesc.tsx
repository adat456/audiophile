import React, { ReactElement, useEffect, useState } from "react";
import widths from "../shared_components/Widths";

interface Props {
    image: object,
    newProd: boolean,
    name: string,
    desc: string,
    price: number,
    slug: string,
}

export const ProductDesc: React.FC<Props> = ({ image, newProd, name, desc, price, slug }) => {
    const [ numItems, setNumItems ] = useState<number>(1)

    let filePaths: object;
    if (image) {
        let imageSizes = Object.keys(image);

        imageSizes.forEach(key => {
            let originalFilePath: string = image[key];
            let adjustedFilePath: string = originalFilePath.slice(1);
            filePaths = {
                ...filePaths,
                [key]: adjustedFilePath,
            };
        });
    };

    function increment() {if (numItems <= 9) setNumItems(numItems + 1);}; 
    function decrement() {if (numItems >= 1) setNumItems(numItems - 1);};
    function addToCart() {
        const existingItem = localStorage.getItem(slug);

        // check to see if an item exists by looking for a key equal to the slug
        if (existingItem) {
            // if the item already exists, parse the value, add the incremented number, and update local storage
            const existingItemInfo = JSON.parse(existingItem);
            const updatedNumItems = existingItemInfo.numItems + numItems;
            localStorage.setItem(slug, JSON.stringify({
                image, name, price, numItems: updatedNumItems
            }));
        } else {
            // if the item does not exist, add to local storage
            localStorage.setItem(slug, JSON.stringify({image, name, price, numItems}));
        }; 

        setNumItems(1);
    };

    return (
        <div className="product-desc">
            <picture>
                <source srcSet={filePaths?.desktop} media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet={filePaths?.tablet} media={"(min-width: 650px"} />
                <img src={filePaths?.mobile} alt={name} />
            </picture>
            <div className="product-preview-desc">
                <h3>{newProd ? "NEW PRODUCT" : ""}</h3>
                <h1>{name?.toUpperCase()}</h1>
                <p>{desc}</p>
                <p className="price">{`$${price}`}</p>
                <div className="cart-add">
                    <div className="adjuster">
                        <button className="increase" type="button" onClick={decrement}>-</button>
                        <div className="cart-num">{numItems}</div>
                        <button className="decrease" type="button" onClick={increment}>+</button>
                    </div>
                    <button type="button" className="add-to-cart" onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};