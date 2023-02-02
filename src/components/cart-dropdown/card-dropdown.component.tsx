import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import { RootState } from "../../store/store";

const DropDown = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const navigate = useNavigate();
    // useCallback: memorize the function, reduce work loads during the rerendring.
    const goToCheckout = useCallback(()=>{navigate('/checkout');}, []);

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