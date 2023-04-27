
import DirectoryItem from './directory-item.component';
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../../store/store";

describe('DirectoryItem component', () => {
    const category = {
        id: 1,
        title:"hat", 
        imgUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png", 
        route: "/hat",
    }
    const produceComponent = () => {
        return render(
          <BrowserRouter>
            <Provider store={store}>
              <DirectoryItem category={category}/>
            </Provider>
          </BrowserRouter>
          
        );
    }
    test('match the snapshot', ()=>{
        const { asFragment } = produceComponent();
        expect(asFragment()).toMatchSnapshot();
    });
    test('render the DirectoryItem component, get category name', ()=>{
        produceComponent();
        expect(screen.getByText(/hat/i)).toBeInTheDocument();
        expect(screen.getByText(/shop now/i)).toBeInTheDocument();
    });
});