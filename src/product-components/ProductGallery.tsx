import React from "react";
import widths from "../shared_components/Widths";

export const ProductGallery: React.FC<{gallery: object}> = ({ gallery }) => {

    let trimmedGallery = {
        first: {},
        second: {},
        third: {},
    };

    function trimFilePaths(object, objectName) {
        const entries = Object.entries(object);
        entries.forEach(entry => {
            if (typeof entry[1] === "object") {
                trimFilePaths(entry[1], entry[0]);
            } else if (typeof entry[1] === "string") {
                const modifiedFilePath = entry[1].slice(1);
                trimmedGallery[objectName][entry[0]] = modifiedFilePath;
                return;
            };
        });
    };

    if (gallery) {
        trimFilePaths(gallery);
    };

    return (
        <div className="product-gallery">
            <picture>
                <source srcSet={trimmedGallery?.first.desktop} media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet={trimmedGallery?.first.tablet} media={`(min-width: ${widths.mobileCutoff}`} />
                <img src={trimmedGallery?.first.mobile} alt="" />
            </picture>
            <picture>
                <source srcSet={trimmedGallery?.second.desktop} media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet={trimmedGallery?.second.tablet} media={`(min-width: ${widths.mobileCutoff}`} />
                <img src={trimmedGallery?.second.mobile} alt="" />
            </picture>
            <picture>
                <source srcSet={trimmedGallery?.third.desktop} media={`(min-width: ${widths.tabletCutoff}`} />
                <source srcSet={trimmedGallery?.third.tablet} media={`(min-width: ${widths.mobileCutoff}`} />
                <img src={trimmedGallery?.third.mobile} alt="" />
            </picture>
        </div>
    );
};
