import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorsCount = 5;

it(`<App/> rendered correctly`, () => {
  const tree = renderer
    .create(<App
      errorsCount={errorsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
