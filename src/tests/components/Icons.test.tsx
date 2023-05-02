import renderer from 'react-test-renderer';
import Clipboard from '../../components/Icons/Clipboard'

test('Clipboard snapshot', async () => {
  const component = renderer.create(<Clipboard />);
  let tree = component.toJSON();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
