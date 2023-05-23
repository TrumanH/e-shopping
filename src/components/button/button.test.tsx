import Button, { BUTTON_TYPES }  from './button.component';
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/store";
import userEvent from "@testing-library/user-event";

describe('Button component', () => {

  const produceComponent = () => {
    return render(
      <Provider store={store}>
        <Button buttonType={BUTTON_TYPES.inverted}>Test</Button>
      </Provider>
    );
  }

  test('match the snapshot', ()=>{
    const { asFragment } = produceComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render the button component', ()=>{
    produceComponent();
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  test('click the button', ()=>{
    produceComponent();
    userEvent.click(screen.getByText(/Test/i));
  });
});

