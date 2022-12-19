import { useContext } from "react";
import { CartItems } from '../../context/cart.context'
import Button from "../button/button.component";
import './cart-dropdown.styles.scss'

const DropDown = () => {
    const {items} = useContext(CartItems)
    console.log("items:", items)
    return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
            {items ? <div>{items.map((item)=>{ return (<div key={item.id}>{item.name}</div>);})}</div> : 
            <div>no items yet</div>}
        </div>
        <Button>Go To Checkout</Button>
    </div>
    );
}

export default DropDown;