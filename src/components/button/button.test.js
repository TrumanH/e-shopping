import renderer from 'react-test-renderer';
import Button, { BUTTON_TYPES }  from './button.component';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Button buttonType={BUTTON_TYPES.inverted}>Test</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  }
);