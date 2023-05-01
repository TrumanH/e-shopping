
import ProductCard from './product-card.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('FormInput component', () => {
    const props = {
        product: {
            id: 1,
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            name: "hat1",
            price: 10,
            },
        linkto: "1"
        }

    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <ProductCard product={props.product} linkto={props.linkto} />
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });
    test('render the FormInput component, get name and price', ()=>{
        produceComponent();
        expect(screen.getByText(/hat1/i)).toBeInTheDocument();
        expect(screen.getByText(/10/i)).toBeInTheDocument();
        expect(screen.getByText(/ADD TO CART/i)).toBeInTheDocument();
    });
});