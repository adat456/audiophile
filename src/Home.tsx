import React from "react";
import Categories from "./shared_components/Categories";
import Blurb from "./shared_components/Blurb";

const Home: React.FC = () => {
    return (
        <main className="home-page">
            <section className="featured-prod">
                
            </section>
            <Categories />
            <Blurb />
        </main>
    );
};

export default Home;

