import { useContext } from "react";
import { CartContext } from '../../context/cart.context'
import Button from "../button/button.component";
import './cart-dropdown.styles.scss'

const DropDown = () => {
    const { cartItems } = useContext(CartContext);
    console.log("items:", cartItems)
    return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.length>0 ? 
            <div>
                {cartItems.map((item)=>{ 
                return (<div key={item.id}>{item.name} {item.price} {item.quantity}</div>);})
                }
            </div> 
            : <div>Your cart is empty</div>
            }
        </div>
        <Button>Go To Checkout</Button>
    </div>
    );
}

export default DropDown;