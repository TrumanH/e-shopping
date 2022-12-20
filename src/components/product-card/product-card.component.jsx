import './product-card.styles.scss';
import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
    const { addItem } = useContext(CartContext);
    const { name, price, imageUrl } = product;
    // console.log(name, price, imageUrl);

    const addToCart = ()=> {
        addItem({...product, quantity: 1});
    }
    return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addToCart}>ADD TO CART</Button>
    </div>
    );
}

export default ProductCard;