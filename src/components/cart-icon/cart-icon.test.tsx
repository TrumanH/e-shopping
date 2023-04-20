
import CartIcon from './cart-icon.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('CartIcon component', () => {
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <CartIcon />
            </Provider>
          </BrowserRouter>
          
        );
    }
    
    test('match the snapshot', ()=>{
      const { asFragment } = produceComponent();
      expect(asFragment()).toMatchSnapshot();
    });

    test('render the CartIcon component, get number of items in the cart', ()=>{
        produceComponent();
        expect(screen.getByText(/0/i)).toBeInTheDocument();
    });
});