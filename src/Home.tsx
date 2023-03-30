import React from "react";
import { Link } from "react-router-dom";

import widths from "./shared_components/Widths";
import Categories from "./shared_components/Categories";
import Blurb from "./shared_components/Blurb";

const Home: React.FC = () => {
    return (
        <main className="home-page">
            <section className="featured-prod">
                <div>
                    <h1>XX99 MARK II HEADPHONES</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link to="/headphones/xx99-mark-two-headphones">SEE PRODUCT</Link>
                </div>
            </section>
            <Categories />
            <section className="home-gallery">
                <section className="zx9">
                    <picture>
                        <source srcSet="/assets/home/desktop/image-speaker-zx9.png" media={`(min-width: ${widths.tabletCutoff}`} />
                        <source srcSet="/assets/home/tablet/image-speaker-zx9.png" media={`(min-width: ${widths.mobileCutoff}`} />
                        <img src="/assets/home/mobile/image-speaker-zx9.png" alt="ZX9 speaker emitting soundwaves on an orange background"/>
                    </picture>
                    <div>
                        <h2>ZX9 SPEAKER</h2>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Link to="/speakers/zx9-speaker">SEE PRODUCT</Link>
                    </div>
                </section>
                <section className="zx7">
                    <h3>ZX7 SPEAKER</h3>
                    <Link to="/speakers/zx7-speaker">SEE PRODUCT</Link>
                </section>
                <picture>
                    <source srcSet="/assets/home/desktop/image-earphones-yx1.jpg" media={`(min-width: ${widths.tabletCutoff}`} />
                    <source srcSet="/assets/home/tablet/image-earphones-yx1.jpg" media={`(min-width: ${widths.mobileCutoff}`} />
                    <img src="/assets/home/mobile/image-earphones-yx1.jpg" alt="YX1 earphones in a charging case"/>
                </picture>
                <section className="yx1">
                    <h3>YX1 EARPHONES</h3>
                    <Link to="/speakers/yx1-earphones">SEE PRODUCT</Link>
                </section>
            </section>
            <Blurb />
        </main>
    );
};

export default Home;

