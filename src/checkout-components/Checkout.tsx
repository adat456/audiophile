import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
import CartSummary from "./CartSummary";
import OrderConf from "./OrderConf";

const Checkout: React.FC = ({ prevLocation }) => {
    const [ cartItems, setCartItems ] = useState<object[]>([]);
    const [ total, setTotal ] = useState(0);
    const [ conf, setConf ] = useState(false);

    useEffect(() => {
        if (localStorage.length > 0) {
            let updatedCart: object[] = [];
            let total = 0;

            for (let i = 0; i < localStorage.length; i++) {
                const cartItemSlug: string = localStorage.key(i);
                const cartItem: string = localStorage.getItem(cartItemSlug);
                let cartItemInfo: object = JSON.parse(cartItem);
                cartItemInfo = {
                    ...cartItemInfo,
                    slug: cartItemSlug,
                };

                updatedCart = [
                    ...updatedCart, 
                    cartItemInfo
                ];

                total += cartItemInfo.price * cartItemInfo.numItems;
            };

            setCartItems(updatedCart);
            setTotal(total);
        };
    }, []);

    return (
        <main className="checkout-page">
            <Link to={prevLocation}>Go back</Link>
            <CheckoutForm cartItems={cartItems} total={total} conf={conf} setConf={setConf} />
            <CartSummary cartItems={cartItems} total={total} setConf={setConf} />
            {conf ? 
                <>
                    <OrderConf cartItems={cartItems} total={total} setConf={setConf} />
                    <div className="backdrop"></div>
                </> : <></>}
        </main>       
    );
};

export default Checkout;