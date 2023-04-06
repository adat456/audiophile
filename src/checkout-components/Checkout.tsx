import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
import CartSummary from "./CartSummary";
import OrderConf from "./OrderConf";

const Checkout: React.FC = ({ prevLocation }) => {
    const [ cartItems, setCartItems ] = useState<object[]>([]);
    const [ total, setTotal ] = useState(0);

    // clicking the button on cart summary to check out will set req (request to checkout) to true
    // any changes to req will trigger a useEffect in the checkout form, and if all the inputs pass validation, form info will be sent to the database and conf will be set to true
    // if conf is true, the order confirmation modal will be displayed
    const [ req, setReq ] = useState(false);
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
            <CheckoutForm cartItems={cartItems} total={total} req={req} setConf={setConf} />
            <CartSummary cartItems={cartItems} total={total} setReq={setReq} />
            {conf ? 
                <>
                    <OrderConf cartItems={cartItems} total={total} setConf={setConf} setReq={setReq} />
                    <div className="backdrop"></div>
                </> : <></>}
        </main>       
    );
};

export default Checkout;