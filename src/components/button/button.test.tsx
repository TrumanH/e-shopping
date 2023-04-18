
import { create } from "react-test-renderer";
import Button, { BUTTON_TYPES }  from './button.component';
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import userEvent from "@testing-library/user-event";

describe('Button component', () => {
  test('match the snapshot', ()=>{
    const component = create(
      <Button buttonType={BUTTON_TYPES.inverted}>Test</Button>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  const produceComponent = () => {
    render(
      <Provider store={store}>
        <Button buttonType={BUTTON_TYPES.inverted}>Test</Button>
      </Provider>
    );
  }

  test('render the button component', ()=>{
    produceComponent();
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  test('click the button', ()=>{
    produceComponent();
    userEvent.click(screen.getByText(/Test/i));
  });
});

