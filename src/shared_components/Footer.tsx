import React from "react";
import Logo from "/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/logo.svg";
import FacebookIcon from "/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "/home/adat456/Practice/front-end-mentor/audiophile/src/assets/shared/desktop/icon-twitter.svg";

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <img src={Logo} alt="Audiophile logo" />
                <p>Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
                <p className="copyright">Copyright 2021. All Rights Reserved.</p>
            </div>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
            </nav>
            <div className="social-media-links">
                <img src={FacebookIcon} alt="Facebook logo" />
                <img src={TwitterIcon} alt="Twitter logo" />
                <img src={InstagramIcon} alt="Instagram logo" />
            </div>
        </footer>
    );
};

export default Footer;