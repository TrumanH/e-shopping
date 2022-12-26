import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'

const DropDown = () => {
    const { cartItems } = useContext(CartContext);
    console.log("items:", cartItems);

    const navigate = useNavigate();
    const goToCheckout = ()=> navigate('/checkout');

    return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.length>0 ? 
            <div>
                {cartItems.map((item)=>{ 
                return (<CartItem key={item.id} item={item}/>);})
                }
            </div> 
            : <div>Your cart is empty</div>
            }
        </div>
        <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
    );
}

export default DropDown;