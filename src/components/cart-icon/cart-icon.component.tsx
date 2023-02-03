import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../store/cart/cart.slice";
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import{ RootState } from "../../store/store";

const CartIcon = ()=> {
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const toggleCartOpen = () => dispatch(setCartOpen());
    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{totalQuantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;