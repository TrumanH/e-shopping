
import CartItem from './cart-item.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('CartItem component', () => {
    const produceComponent = () => {
        const ahat = {
            id: "1",
            name: "hat1",
            price: 10,
            quantity: 1,
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          }
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <CartItem item={ahat}/>
            </Provider>
          </BrowserRouter>
          
        );
    }
    
    test('match the snapshot', ()=>{
      const { asFragment } = produceComponent();
      expect(asFragment()).toMatchSnapshot();
    });

    test('render the CartItem component, get name and price', ()=>{
        produceComponent();
        expect(screen.getByText(/hat1/i)).toBeInTheDocument();
        expect(screen.getByText(/10/i)).toBeInTheDocument();
    });
});