import React from "react";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
    return (
        <section className="categories">
            <div className="category">
                <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Pair of black headphones with gold accents" />
                <h3>HEADPHONES</h3>
                <div className="link">
                    <Link to="/headphones">SHOP</Link>
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                </div>
            </div>
            <div className="category">
                <img src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speaker set with two drums" />
                <h3>SPEAKERS</h3>
                <div className="link">
                    <Link to="/speakers">SHOP</Link>
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                </div>
            </div>
            <div className="category">
                <img src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Black circular earphones case" />
                <h3>EARPHONES</h3>
                <div className="link">
                    <Link to="/earphones">SHOP</Link>
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                </div>
            </div>
        </section>
    );
};

export default Categories;