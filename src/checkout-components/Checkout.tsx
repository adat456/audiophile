import React from "react";
import { Link } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";

const Checkout: React.FC = () => {
    return (
        <main>
            <Link to="">Go Back</Link>
            <CheckoutForm />
        </main>
    );
};

export default Checkout;