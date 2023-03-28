import React from "react";
import { useParams } from "react-router-dom";

const Category: React.FC = () => {
    const { category } = useParams();
    const categoryName = category?.toUpperCase();

    return (
        <main>
            <h1>{categoryName}</h1>
        </main>
    );
};

export default Category;