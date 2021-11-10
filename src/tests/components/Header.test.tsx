import renderer from 'react-test-renderer';
import Header from '../../components/Header';

test('Header snapshot', async () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
