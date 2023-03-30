import React from "react";
import { Link } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
import CartSummary from "./CartSummary";

const Checkout: React.FC = () => {
    return (
        <main className="checkout-page">
            <Link to="">Go Back</Link>
            <CheckoutForm />
            <CartSummary />
        </main>
    );
};

export default Checkout;