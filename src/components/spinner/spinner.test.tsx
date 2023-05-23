
import Spinner from './spinner.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('SignUpForm component', () => {
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <Spinner />
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });
});