import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, CheckoutBlock, Total} from './checkout.styles';
import { useSelector } from 'react-redux';

const Checkout = ()=> {
    const { cartItems, totalPrice } = useSelector(state => state.cart)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span>Product</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Description</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Quantity</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Price</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Remove</span>
                </CheckoutBlock>
            </CheckoutHeader>
            {cartItems.map((item)=> <CheckoutItem key={item.id} cartItem={item}/>
            )}
            <Total>Total Price: ${totalPrice}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;