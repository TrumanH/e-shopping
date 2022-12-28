
import { CartItemContainer, ItemDetails, Text } from './cart-item.styles';

const CartItem = ({item})=> {
    const {name, price, imageUrl, quantity} = item;
    return (
    <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
            <Text className='name'>{name}</Text>
            <Text className='price'>{quantity} X ${price}</Text>
        </ItemDetails>
    </CartItemContainer>
    )
};

export default CartItem;