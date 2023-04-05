import { v4 as uuidv4 } from "uuid";

const CartSummary: React.FC = ({ cartItems, total, setConf }) => {
    const shipping = 50;

    const generatedCartItems = cartItems?.map((item) => {
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
            {generatedCartItems}
            <div className="sum">
                <p>TOTAL</p>
                <p>{`$${total}`}</p>
            </div>
            <div className="sum">
                <p>SHIPPING</p>
                <p>{cartItems.length > 0 ? `$${shipping}` : "$0"}</p>
            </div>
            <div className="sum">
                <p>VAT (INCLUDED)</p>
                <p>{`$${Math.round(total * .05)}`}</p>
            </div>
            <div className="sum">
                <p>GRAND TOTAL</p>
                <p>{cartItems.length > 0 ? `$${total + shipping + Math.round(total * .05)}` : "$0"}</p>
            </div>
            {cartItems.length > 0 ? 
                <button type="button" onClick={() => {
                    setConf(true);
                    document.documentElement.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "instant", 
                    });
                }}>CONTINUE AND PAY</button> :
                <button type="button" disabled>CONTINUE AND PAY</button>
            }
        </section>
    );
};

export default CartSummary;