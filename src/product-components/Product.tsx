import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Categories from "../shared_components/Categories";
import Blurb from "../shared_components/Blurb";

import { ProductDesc } from "./ProductDesc";
import ProductDetails from "./ProductDetails";
import ProductSuggestions from './ProductSuggestions';

const Product: React.FC = () => {
    const { categoryParam, itemParam } = useParams();
    const [ item, setItem ] = useState<object | null>({})

    useEffect(() => {
        async function pullItemInfo() {
            try {
                const itemPromise = await fetch(`http://localhost:9000/${categoryParam}/${itemParam}`);
                if (!itemPromise.ok) {
                    throw new Error("Item not found");
                }
                const itemData = await itemPromise.json();
                setItem(itemData);
                console.log(itemData);
            } catch (err) {
                // without checking that err is actually an Error, TS will claim that the type of err is unknown
                // if (err instanceof Error) setHeader(err.message);
            }
        };
        
        pullItemInfo();
    }, [itemParam]);

    return (
        <main className="product-page">
            <Link to={`/${categoryParam}`}>Go back</Link>
            <ProductDesc image={item.image} newProd={item.new} name={item.name} desc={item.description} price={item.price} slug={item.slug} />
            <ProductDetails features={item.features} includedItems={item.includes} />
            <ProductSuggestions suggestions={item.others} />
            <Categories />
            <Blurb />
        </main>
    );
};

export default Product;