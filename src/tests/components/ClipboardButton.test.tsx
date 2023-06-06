import renderer from 'react-test-renderer';
import ClipBoardButton from '../../components/ClipboardButton';

test('ClipBoardButton snapshot', async () => {
  const component = renderer.create(<ClipBoardButton />);
  let tree = component.toJSON();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
