

import { FC, memo } from 'react';
import { CartItemContainer, ItemDetails, Text } from './cart-item.styles';
import { CartItem as CartItemT } from '../../store/cart/cart.slice';

type CartItemProps = {
    item: CartItemT,
}

// memo: unless props changed, would not rerender the CartItem component.
const CartItem: FC<CartItemProps> = memo(({item})=> {
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
});

export default CartItem;