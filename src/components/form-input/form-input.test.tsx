
import FormInput from './form-input.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('FormInput component', () => {
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <FormInput label={"name"}/>
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });
    test('render the FormInput component, get label', ()=>{
        produceComponent();
        expect(screen.getByText(/name/i)).toBeInTheDocument();
    });
});