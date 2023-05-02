import renderer from 'react-test-renderer';
import TagBadge from '../../components/TagBadge';

test('TagBadge snapshot', async () => {
  const component = renderer.create(<TagBadge tag={''} />);
  let tree = component.toJSON();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
