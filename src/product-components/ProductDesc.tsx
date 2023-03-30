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

    // let BigImg, MidImg, LittleImg;
    // useEffect(() => {
    //     async function getProdImgs(image: object) {
    //         BigImg = await import(`.${image?.desktop}`);
    //         MidImg = await import(`.${image?.tablet}`);
    //         LittleImg = await import(`.${image?.mobile}`);
    //     };
    //     getProdImgs(image);
    // }, [image])

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
    };

    return (
        <div className="product-desc">
            {/* <picture>
                <source srcSet={BigImg} media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet={MidImg} media={`(min-width: ${widths.mobileCutoff}`} />
                <img src={LittleImg} alt={name} />
            </picture> */}
            <img src="" alt="Product photo" />
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