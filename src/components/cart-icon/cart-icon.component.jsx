import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'

const CartIcon = ()=> {
    const { isCartOpen, setCartOpen, totalQuantity } = useContext(CartContext);
    // const totalQuantity = cartItems.reduce((sum, item)=>{ return sum+item.quantity}, 0);
    const toggleCartOpen = () => setCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuantity}</span>
        </div>
    );
}

export default CartIcon;