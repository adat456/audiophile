import React, { useState } from "react";

const CheckoutForm: React.FC = () => {
    const [ eMoney, setEMoney ] = useState<boolean | null>(null);

    function handlePaymentType(e) {
        if (e.target.value === "e-money") setEMoney(true);
        if (e.target.value === "cash") setEMoney(false);
    };

    return (
        <form action="POST">
            <h1>CHECKOUT</h1>
            <fieldset>
                <legend>BILLING DETAILS</legend>
                <label htmlFor="name">Name<input type="text" placeholder="Alexei Ward" id="name" /></label>
                <label htmlFor="email">Email Address<input type="email" placeholder="alexei@mail.com" id="email" /></label>
                <label htmlFor="number">Phone Number<input type="number" placeholder="2025550136" id="number" /></label>
            </fieldset>
            <fieldset>
                <legend>SHIPPING INFO</legend>
                <label htmlFor="address">Address<input type="text" placeholder="1137 Williams Avenue" id="address" /></label>
                <label htmlFor="zip-code">ZIP Code<input type="number" placeholder="10001" id="zip-code" /></label>
                <label htmlFor="city">City<input type="text" placeholder="New York" id="city" /></label>
                <label htmlFor="country">Country<input type="text" placeholder="United States" id="country" /></label>
            </fieldset>
            <fieldset>
                <legend>PAYMENT DETAILS</legend>
                <div onChange={handlePaymentType}>
                    <input type="radio" id="e-money" value="e-money" name="payment"/>
                    <label htmlFor="e-money">e-Money</label>
                    <input type="radio" id="cash" value="cash" name="payment"/>
                    <label htmlFor="cash">Cash on Delivery</label>
                </div>
                {eMoney ? 
                    <fieldset>
                        <label htmlFor="e-money-number">e-Money Number<input type="number" placeholder="238521993" id="e-money-number" /></label>
                        <label htmlFor="e-money-pin">e-Money PIN<input type="number" placeholder="6891" id="e-money-pin" /></label>
                    </fieldset> :
                    <fieldset></fieldset>
                }
            </fieldset>
        </form>
    );
};

export default CheckoutForm;