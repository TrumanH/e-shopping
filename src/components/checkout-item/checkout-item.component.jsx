import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({item})=> {
    const { name, price, imageUrl, quantity } = item;
    const { addItem, decreaseItem, removeItem } = useContext(CartContext);
    const addItemHandler = ()=> addItem(item);
    const decreaseItemHandler = () => decreaseItem(item);
    const removeItemHandler = () => removeItem(item);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decreaseItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={removeItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;