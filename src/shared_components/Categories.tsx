import React from 'react';
import Earphones from '/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/image-category-thumbnail-earphones.png';
import Headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from '/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/image-category-thumbnail-speakers.png';
import Arrow from '/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/icon-arrow-right.svg';

const Categories: React.FC = () => {
    return (
        <section className='categories'>
            <div>
                <img src={Headphones} alt="Pair of black headphones with gold accents" />
                <h3>HEADPHONES</h3>
                <div className="link">
                    <a href="">SHOP</a>
                    <img src={Arrow} alt="" />
                </div>
            </div>
            <div>
                <img src={Speakers} alt="Speaker set with two drums" />
                <h3>SPEAKERS</h3>
                <div className="link">
                    <a href="">SHOP</a>
                    <img src={Arrow} alt="" />
                </div>
            </div>
            <div>
                <img src={Earphones} alt="Black circular earphones case" />
                <h3>EARPHONES</h3>
                <div className="link">
                    <a href="">SHOP</a>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Categories;