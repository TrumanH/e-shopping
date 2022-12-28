import { ProductCardContainer, Name, Price, Footer} from './product-card.styles';
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
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}></img>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType='inverted' onClick={addToCart}>ADD TO CART</Button>
    </ProductCardContainer>
    );
}

export default ProductCard;