import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductPreview from "./ProductPreview";

const Category: React.FC = () => {
    const { categoryParam } = useParams();
    const [ header, setHeader ] = useState<string | undefined>('');
    const [ categoryItems, setCategoryItems ] = useState<object[]>([]);

    // executes whenever the category/URL changes
    useEffect(() => {
        async function pullCategoryItems() {
            try {
                const categoryItemsPromise = await fetch(`http://localhost:9000/${categoryParam}`);
                if (!categoryItemsPromise.ok) {
                    throw new Error("Category not found");
                };
                const categoryItemsData = await categoryItemsPromise.json();

                setHeader(categoryParam?.toUpperCase());
                setCategoryItems(categoryItemsData);
            } catch (err) {
                // without checking that err is actually an Error, TS will claim that the type of err is unknown
                console.log(err);
                if (err instanceof Error) setHeader(err.message);
            }
        };
        
        pullCategoryItems();
    }, [categoryParam]);

    const ProdPreviewArr = categoryItems.map((item) => <ProductPreview key={item.id} newProd={item.new} name={item.name} desc={item.description} category={categoryParam} slug={item.slug} image={item.categoryImage.desktop} />);

    return (
        <div>
            {categoryItems ?
                <main>
                    <h1>{header}</h1>
                    {ProdPreviewArr}
                </main> :
                <h1>{header}</h1>
            }
        </div>   
    );
};

export default Category;