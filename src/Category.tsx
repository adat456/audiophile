import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category: React.FC = () => {
    const { categoryParam } = useParams();
    const [ header, setHeader ] = useState<string | undefined>('');
    const [ categoryItems, setCategoryItems ] = useState<object[]>([]);

    useEffect(() => {
        async function pullCategoryItems() {
            try {
                const categoryItemsPromise = await fetch(`http://localhost:9000/${categoryParam}`);
                if (!categoryItemsPromise.ok) {
                    throw new Error("Category not found");
                }
                const categoryItemsData = await categoryItemsPromise.json();
                setHeader(categoryParam?.toUpperCase());
                setCategoryItems(categoryItemsData);
            } catch (err) {
                if (err instanceof Error) setHeader(err.message);
            }
        };
        
        pullCategoryItems();
    }, [categoryParam]);

    return (
        <div>
            {categoryItems ?
                <main>
                    <h1>{header}</h1>
                </main> :
                <h1>{header}</h1>
            }
        </div>   
    );
};

export default Category;