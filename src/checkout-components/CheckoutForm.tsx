import React, { useState } from "react";
import { validateEmail, validateNumber } from "./helpers";

const CheckoutForm: React.FC = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ zipcode, setZipcode ] = useState('');
    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ eNumber, setENumber ] = useState('');
    const [ ePin, setEPin ] = useState('');
    const [ eMoney, setEMoney ] = useState<boolean | null>(null);

    function handleChange(e) {
        const input = e.target;

        switch (e.target.getAttribute("id")) {
            case "email":
                setEmail(input.value);
                validateEmail(input);
                break;
            case "number":
                setNumber(input.value);
                validateNumber(input);
                break;
            default:
                return;
        };
        
    };

    function handlePaymentType(e) {
        if (e.target.value === "e-money") setEMoney(true);
        if (e.target.value === "cash") setEMoney(false);
    };

    return (
        <form action="POST" noValidate>
            <h1>CHECKOUT</h1>
            <fieldset>
                <legend>BILLING DETAILS</legend>
                <label htmlFor="name">Name<input type="text" placeholder="Alexei Ward" value={name} onChange={handleChange} id="name" /></label>
                <label htmlFor="email">Email Address<input type="email" placeholder="alexei@mail.com" value={email} onChange={handleChange}  id="email" /></label>
                <label htmlFor="number">Phone Number<input type="text" placeholder="2025550136" maxLength="10" value={number} onChange={handleChange} id="number" /></label>
            </fieldset>
            <fieldset>
                <legend>SHIPPING INFO</legend>
                <label htmlFor="address">Address<input type="text" placeholder="1137 Williams Avenue" value={address} onChange={handleChange} id="address" /></label>
                <label htmlFor="zip-code">ZIP Code<input type="text" maxLength="5" placeholder="10001" value={zipcode} onChange={handleChange} id="zip-code" /></label>
                <label htmlFor="city">City<input type="text" placeholder="New York" value={city} onChange={handleChange} id="city" /></label>
                <label htmlFor="country">Country<input type="text" placeholder="United States" value={country} onChange={handleChange} id="country" /></label>
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
                        <label htmlFor="e-money-number">e-Money Number<input type="number" placeholder="238521993" value={eNumber} onChange={handleChange} id="e-money-number" /></label>
                        <label htmlFor="e-money-pin">e-Money PIN<input type="number" placeholder="6891" value={ePin} onChange={handleChange} id="e-money-pin" /></label>
                    </fieldset> :
                    <fieldset></fieldset>
                }
            </fieldset>
        </form>
    );
};

export default CheckoutForm;