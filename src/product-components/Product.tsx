import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Categories from "../shared_components/Categories";
import Blurb from "../shared_components/Blurb";

import { ProductDesc } from "./ProductDesc";
import ProductDetails from "./ProductDetails";
import { ProductGallery } from "./ProductGallery";
import ProductSuggestions from './ProductSuggestions';

const Product: React.FC = () => {
    const { categoryParam, itemParam } = useParams();
    const [ item, setItem ] = useState<object | null>({})
    const [ err, setErr ] = useState<string | null>(null);

    useEffect(() => {
        async function pullItemInfo() {
            try {
                const itemPromise = await fetch(`http://localhost:9000/${categoryParam}/${itemParam}`);
                if (!itemPromise.ok) {
                    throw new Error("Item not found");
                }
                const itemData = await itemPromise.json();
                setItem(itemData);
            } catch (err) {
                if (err instanceof Error) setErr(err);
            }
        };
        
        pullItemInfo();
    }, [itemParam]);

    return (
        <div>
            <main className="product-page">
                <Link to={`/${categoryParam}`}>Go back</Link>
                <ProductDesc image={item.image} newProd={item.new} name={item.name} desc={item.description} price={item.price} slug={item.slug} />
                <ProductDetails features={item.features} includedItems={item.includes} />
                <ProductGallery gallery={item.gallery} />
                <ProductSuggestions suggestions={item.others} />
            </main>
            <Categories />
            <Blurb />
        </div>
        
    );
};

export default Product;