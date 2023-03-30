import { FC } from 'react';
import { ProductCardContainer, Name, Price, Footer} from './product-card.styles';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.slice';
import { Product } from '../../store/categories/categories.slice';
import { BUTTON_TYPES } from '../../components/button/button.component';

type ProductCartProps = {
    product: Product,
    linkto: string
}
const ProductCard: FC<ProductCartProps> = ({product, linkto}) => {
    const { name, price, imageUrl } = product;
    // console.log(name, price, imageUrl);
    const dispatch = useDispatch();
    const addToCart = ()=> {
        dispatch(addItem({...product, quantity: 1}));
    }
    return (
    <ProductCardContainer to={linkto}>
        <img src={imageUrl} alt={`${name}`}></img>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPES.inverted} onClick={addToCart}>ADD TO CART</Button>
    </ProductCardContainer>
    );
}

export default ProductCard;