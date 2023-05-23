
import CheckoutItem from './checkout-item.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('CheckoutItem component', () => {
    const item = {
        id: "hat1",
        name:"Brown Brim", 
        imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png", 
        price: 25, 
        quantity:2
    }
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <CheckoutItem cartItem={item} />
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });
    test('render the CheckoutItem component, get item name and price', ()=>{
        produceComponent();
        expect(screen.getByText(/Brown Brim/i)).toBeInTheDocument();
        expect(screen.getByText(/25/i)).toBeInTheDocument();
    });
});