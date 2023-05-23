
import CategoryPreview from './category-preview.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('CategoryPreview component', () => {
    const props = {
        title: "hat",
        products: []
    };
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <CategoryPreview title={props.title} products={props.products}/>
            </Provider>
          </BrowserRouter>
          
        );
    }
    
    test('match the snapshot', ()=>{
      const { asFragment } = produceComponent();
      expect(asFragment()).toMatchSnapshot();
    });

    test('render the CategoryPreview component, get category name', ()=>{
        produceComponent();
        expect(screen.getByText(/HAT/i)).toBeInTheDocument();
    });
});
