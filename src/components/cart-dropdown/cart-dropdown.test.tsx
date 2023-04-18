
import DropDown from './card-dropdown.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('DropDown component', () => {
    const produceComponent = () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <DropDown />
            </Provider>
          </BrowserRouter>
          
        );
      }

    test('render the DropDown component', ()=>{
        produceComponent();
        expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    });
});