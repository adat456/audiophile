import React from "react";
import widths from "../shared_components/Widths";

const Blurb: React.FC = () => {
    return (
        <section className="blurb">
            <div className="blurb-text">
                <h2>BRINGING YOU THE <span className="emphasis">BEST</span> AUDIO GEAR</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showcase and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <picture>
                <source srcSet="/assets/shared/desktop/image-best-gear.jpg" media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet="/assets/shared/tablet/image-best-gear.jpg" media={`(min-width: ${widths.mobileCutoff}`} />
                <img src="/assets/shared/mobile/image-best-gear.jpg" alt="Man looking to his left while listening to audio in his headphones"/>
            </picture>
        </section>
    );
};

export default Blurb;