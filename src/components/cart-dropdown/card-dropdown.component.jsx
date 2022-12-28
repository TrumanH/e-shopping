import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'

const DropDown = () => {
    const { cartItems } = useContext(CartContext);
    console.log("items:", cartItems);

    const navigate = useNavigate();
    const goToCheckout = ()=> navigate('/checkout');

    return (
    <CartDropdownContainer>
        <CartItems>
            {cartItems.length>0 ? 
            <div>
                {cartItems.map((item)=>{ 
                return (<CartItem key={item.id} item={item}/>);})
                }
            </div> 
            : <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItems>
        <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
    );
}

export default DropDown;