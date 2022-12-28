import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ()=> {
    const { isCartOpen, setCartOpen, totalQuantity } = useContext(CartContext);
    // const totalQuantity = cartItems.reduce((sum, item)=>{ return sum+item.quantity}, 0);
    const toggleCartOpen = () => setCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;