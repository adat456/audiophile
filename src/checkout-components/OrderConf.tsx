import { Link } from "react-router-dom";

const OrderConf: React.FC = ({ cartItems, total, setConf, setReq }) => {
    return (
        <div className="order-conf">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p>You will receive an email confirmation shortly.</p>
            <div className="summary">
                <div className="items">
                    <div className="first-item">
                        <img src={cartItems[0].image.mobile.slice(1)} alt={cartItems[0].name} />
                        <div className="text">
                            <div className="desc">
                                <p>{cartItems[0].name}</p>
                                <p>{`$${cartItems[0].price}`}</p>
                            </div>
                            <p>{`${cartItems[0].numItems}x`}</p>
                        </div>
                    </div>
                    <p className="remainder">{cartItems.length > 1 ? `and ${cartItems.length - 1} other item(s)` : ""}</p>
                </div>
                <div className="grand-total">
                    <p>GRAND TOTAL</p>
                    <p>{`$${total}`}</p>
                </div>
            </div>
            <Link to="/" onClick={() => {
                setConf(false);
                setReq(false);
            }}>BACK TO HOME</Link>
        </div>
    );
};

export default OrderConf;