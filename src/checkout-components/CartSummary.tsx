import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CartSummary: React.FC = () => {
    const [ cartItems, setCartItems ] = useState<object[]>([]);

    useEffect(() => {
        const cartLength = localStorage.length;
        console.log(cartLength);
    
        for (let i = 0; i < cartLength; i++) {
            const cartItemSlug: string | null = localStorage.key(i);
            if (typeof cartItemSlug === "string") {
                let cartItem: string = localStorage.getItem(cartItemSlug);
                let cartItemInfo: object = JSON.parse(cartItem);
                console.log(cartItemInfo);
                setCartItems([
                    ...cartItems,
                    cartItemInfo,
                ]);
            };
        };
    }, []);

    const cartItemsArr = cartItems?.map((item) => {
        console.log(item);
        return (
            <div key={uuidv4()} className="cart-item">
                <div className="desc">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <p>{`${item.numItems}x`}</p>
            </div>
        );
    });  
    
    return (
        <section className="cart-summary">
            <h2>SUMMARY</h2>
            {cartItemsArr}
        </section>
    );
};

export default CartSummary;