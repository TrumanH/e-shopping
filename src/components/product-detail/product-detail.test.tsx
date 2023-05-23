
import ProductDetails from './product-detail.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('ProductDetails component', () => {
    const product = {
        id: 1,
        name: "hat name",
        title: "hat title",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 10,
        category: "hats",
        desc: "description content",
        }

    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <ProductDetails product={product} />
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('render the ProductDetails component, get name, title and price etc.', ()=>{
        produceComponent();
        expect(screen.getByText(/hat title/i)).toBeInTheDocument();
        expect(screen.getByText(/Product name: hat name./i)).toBeInTheDocument();
        expect(screen.getByText(/Category: hats./i)).toBeInTheDocument();
        expect(screen.getByText(/10/i)).toBeInTheDocument();
        expect(screen.getByText(/ADD TO CART/i)).toBeInTheDocument();
        expect(screen.getByText(/Shipping fee: Free shipping./i)).toBeInTheDocument();
    });
});