import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CartPreview: React.FC = ({ setCartModal }) => {
    const [ cartItems, setCartItems ] = useState<object[]>([]);
    const [ total, setTotal ] = useState(0);

    // pulling all (original/updated) data from localStorage into component state whenever the component is mounted --> single source of truth
    useEffect(() => {
        if (localStorage.length > 0) {
            let updatedCart: object[] = [];

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
            };

            setCartItems(updatedCart);
        };
    }, []);
    
    // changes total whenever the cartItems array changes
    useEffect(() => {
        setTotal(cartItems.reduce((acc, item) => {
            return acc + (item.price * item.numItems);
        }, 0));
    }, [cartItems])
    
    function changeNumItems(e) {
        const operation = e.target.getAttribute("data-op");
        const slug = e.target.getAttribute("data-key");

        cartItems.forEach(cartItem => {  
            // if the cart item matches...  
            if (cartItem.slug === slug) {
                const updatedNumItems = (operation === "increase") ? ++cartItem.numItems : --cartItem.numItems;

                // loop through the existing cart items, find the matching cart item, and return an updated object
                setCartItems(cartItems.map(item => {
                    if (item.slug === slug) {
                        return {
                            ...item,
                            numItems: updatedNumItems,
                        };
                    } else {
                        return item;
                    };
                }));

                // also update the corresponding item in local storage, so that if the cart is closed and re-opened, component can pull the updated items from local storage into state
                localStorage.setItem(slug, JSON.stringify({
                    ...cartItem,
                    numItems: updatedNumItems,
                }));
            };          
        });
    };

    function handleRemove() {
        setCartItems([]);
        localStorage.clear();
    };

    const generatedCartItems = cartItems?.map((item) => {
        return (
            <div key={uuidv4()} className="cart-item">
                <img src={item.image.mobile.slice(1)} alt={item.name} />
                <div className="text">
                    <div className="desc">
                        <p>{item.name}</p>
                        <p>{`$${item.price}`}</p>
                    </div>
                    <div className="adjuster">
                        <button className="increase" type="button" onClick={changeNumItems} data-key={item.slug} data-op="decrease">-</button>
                        <div className="cart-num">{item.numItems}</div>
                        <button className="decrease" type="button" onClick={changeNumItems} data-key={item.slug} data-op="increase" >+</button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="cart-preview">
            <div className="cart-header">
                <p>{`CART (${localStorage.length})`}</p>
                <button type="button" onClick={handleRemove}>Remove all</button>
            </div>
            <div className="cart-items">
                {cartItems.length === 0 ? 
                    <p className="cart-msg">No items in cart.</p> : <></>}
                {generatedCartItems}
            </div>
            <div className="subtotal">
                <p>SUBTOTAL</p>
                <p>${total}</p>
            </div>
            {cartItems.length === 0 ? 
                <button type="button" disabled>CHECKOUT</button> : <Link to="/checkout" onClick={() => setCartModal(false)}>CHECKOUT</Link>
            }
        </div>
    );
};

export default CartPreview;