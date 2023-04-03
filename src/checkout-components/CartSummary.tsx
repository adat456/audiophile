import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CartSummary: React.FC = () => {
    const [ cartItems, setCartItems ] = useState<object[]>([]);
    const [ total, setTotal ] = useState(0);
    const shipping = 50;

    useEffect(() => {
        const cartLength = localStorage.length;
        
        if (cartLength > 0) {
            let updatedCart: object[] = [];
            let cartTotal = 0;

            for (let i = 0; i < cartLength; i++) {
                const cartItemSlug: string = localStorage.key(i);
                const cartItem: string = localStorage.getItem(cartItemSlug);
                const cartItemInfo: object = JSON.parse(cartItem);
                console.log(cartItemInfo);

                cartTotal += cartItemInfo.numItems * cartItemInfo.price;
                
                updatedCart = [...updatedCart, cartItemInfo];
            };

            setTotal(cartTotal);
            setCartItems(updatedCart);
        };
    }, []);

    const cartItemsArr = cartItems?.map((item) => {
        console.log(item);
        return (
            <div key={uuidv4()} className="cart-item">
                <img src={item.image.mobile.slice(1)} alt={item.name} />
                <div className="text">
                    <div className="desc">
                        <p>{item.name}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                    <p>{`${item.numItems}x`}</p>
                </div>
            </div>
        );
    });  
    
    return (
        <section className="cart-summary">
            <h2>SUMMARY</h2>
            {cartItemsArr}
            <div className="sum">
                <p>TOTAL</p>
                <p>{`$${total}`}</p>
            </div>
            <div className="sum">
                <p>SHIPPING</p>
                <p>{`$${shipping}`}</p>
            </div>
            <div className="sum">
                <p>VAT (INCLUDED)</p>
                <p>{`$${Math.round(total * .05)}`}</p>
            </div>
            <div className="sum">
                <p>GRAND TOTAL</p>
                <p>{`$${total + shipping + Math.round(total * .05)}`}</p>
            </div>
            <button type="button">CONTINUE AND PAY</button>
        </section>
    );
};

export default CartSummary;