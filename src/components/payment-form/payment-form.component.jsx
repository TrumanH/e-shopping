import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';
import { useSelector, useDispatch } from 'react-redux';
import { cleanUpItems } from '../../store/cart/cart.slice';
import { BUTTON_TYPES } from '../button/button.component';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useSelector(state=>state.cart.totalPrice);
  const currentUser = useSelector(state=>state.user.user);
  const dispatch = useDispatch();
  // console.log(currentUser);
  const [ isPaymentProcessing, setPaymentProcessing ] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) { return; }
    setPaymentProcessing(true);
    // request severless function to create a payment intent.
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content_Type': 'application/json',
      },
      body: JSON.stringify({amount: totalPrice*100}),
    }).then(res=> res.json());
    // get credential 'client_secret' from response, which would used to get result of the payment. 
    const clientSecret = response.paymentIntent.client_secret;

    // request stripe to get result of the payment intent created before.
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Truman He',
        },
      },
    });
    setPaymentProcessing(false);
    
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
        dispatch(cleanUpItems()); // after payment successed, clean up checked products in the cart.
      }
    }
  }
  
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton 
          isLoading={isPaymentProcessing}
          buttonType={BUTTON_TYPES.inverted} 
          onClick={paymentHandler}
        >
            Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
};

export default PaymentForm;