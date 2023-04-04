import React from "react";
import { Link } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
import CartSummary from "./CartSummary";

const Checkout: React.FC = ({ prevLocation }) => {
    console.log(prevLocation);
    
    return (
        <main className="checkout-page">
            <Link to={prevLocation}>Go back</Link>
            <CheckoutForm />
            <CartSummary />
        </main>
    );
};

export default Checkout;