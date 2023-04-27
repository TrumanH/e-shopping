
import Directory from './directory.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('Directory component', () => {
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <Directory />
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });
    test('render the Directory component, get category name', ()=>{
        produceComponent();
        expect(screen.getByText(/sneakers/i)).toBeInTheDocument();
        expect(screen.getByText(/womens/i)).toBeInTheDocument();
        expect(screen.getAllByText('shop now'));
    });
});