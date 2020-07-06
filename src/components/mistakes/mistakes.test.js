import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

it(`<Mistakes /> rendered correctly`, () => {
  const tree = renderer
    .create(<Mistakes
      count={3}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
