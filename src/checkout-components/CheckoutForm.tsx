import { useState, useRef } from "react";
import { validateName, validateEmail, validateNumber, validateAddress, validateZipcode, validateCity, validateCountry } from "./helpers";

const CheckoutForm: React.FC = ({ cartItems, total, conf, setConf }) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ zipcode, setZipcode ] = useState("");
    const [ city, setCity ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ eNumber, setENumber ] = useState("");
    const [ ePin, setEPin ] = useState("");
    const [ eMoney, setEMoney ] = useState<boolean | null>(null);
    const formRef = useRef(null);

    function handleChange(e) {
        const input = e.target;
        switch (e.target.getAttribute("id")) {
            case "name":
                setName(input.value);
                validateName(input);
                break;
            case "email":
                setEmail(input.value);
                validateEmail(input);
                break;
            case "number":
                setNumber(input.value);
                validateNumber(input);
                break;
            case "address":
                setAddress(input.value);
                validateAddress(input);
                break;
            case "zip-code":
                setZipcode(input.value);
                validateZipcode(input);
                break;
            case "city":
                setCity(input.value);
                validateCity(input);
                break;
            case "country":
                setCountry(input.value);
                validateCountry(input);
                break;
            case "e-money-number":
                setENumber(input.value);
                break;
            case "e-money-pin":
                setEPin(input.value);
                break;
            default:
                return;
        };
        
    };

    function handlePaymentType(e) {
        if (e.target.value === "e-money") setEMoney(true);
        if (e.target.value === "cash") setEMoney(false);
    };

    async function sendPaymentInfo() {
        const reqOpts = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, email, number, address, zipcode, city, country, eMoney, eNumber, ePin, cartItems, total}),
        };

        const res = await fetch("http://localhost:9000/payment", reqOpts);
        if (res.ok) {
            console.log("Data saved.");
        } else {
            alert("Something went wrong with processing your payment. Please try again later.");
        }
    };

    if (conf) {
        if (formRef.current.checkValidity()) {
            sendPaymentInfo();
            localStorage.clear();
        } else {
            // this may be illegal teehee
            setConf(false);
            formRef.current.reportValidity();
        }
    };

    return (
        <form action="POST" ref={formRef} autoComplete="off" noValidate>
            <h1>CHECKOUT</h1>
            <fieldset>
                <legend>BILLING DETAILS</legend>
                <label htmlFor="name">Name<input type="text" placeholder="Alexei Ward" value={name} onChange={handleChange} id="name" required /></label>
                <label htmlFor="email">Email Address<input type="email" placeholder="alexei@mail.com" value={email} onChange={handleChange}  id="email" required /></label>
                <label htmlFor="number">Phone Number<input type="tel" placeholder="2025550136" pattern="[0-9]{10}" maxLength="10" value={number} onChange={handleChange} id="number" required /></label>
            </fieldset>
            <fieldset>
                <legend>SHIPPING INFO</legend>
                <label htmlFor="address">Address<input type="text" placeholder="1137 Williams Avenue" value={address} onChange={handleChange} id="address" required /></label>
                <label htmlFor="zip-code">ZIP Code<input type="text" pattern="[0-9]{5}" maxLength="5" placeholder="10001" value={zipcode} onChange={handleChange} id="zip-code" required /></label>
                <label htmlFor="city">City<input type="text" placeholder="New York" value={city} onChange={handleChange} id="city" required /></label>
                <label htmlFor="country">Country<input type="text" placeholder="United States" value={country} onChange={handleChange} id="country" required /></label>
            </fieldset>
            <fieldset>
                <legend>PAYMENT DETAILS</legend>
                <div className="payment-types" onChange={handlePaymentType}>                   
                    <label htmlFor="e-money"><input type="radio" id="e-money" value="e-money" name="payment"/>e-Money</label>                   
                    <label htmlFor="cash"><input type="radio" id="cash" value="cash" name="payment"/>Cash on Delivery</label>
                </div>
                {eMoney ? 
                    <fieldset className="e-money-details">
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