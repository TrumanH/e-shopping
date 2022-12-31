import { ProductCardContainer, Name, Price, Footer} from './product-card.styles';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.slice';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    // console.log(name, price, imageUrl);
    const dispatch = useDispatch();
    const addToCart = ()=> {
        dispatch(addItem({...product, quantity: 1}));
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