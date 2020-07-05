import React from 'react';
import renderer from 'react-test-renderer';
import Lives from './lives.jsx';

it(`<Lives /> rendered correctly`, () => {
  const tree = renderer
    .create(<Lives
      count={3}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
