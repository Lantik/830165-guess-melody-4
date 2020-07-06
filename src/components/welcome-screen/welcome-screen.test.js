import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const maxMistakes = 5;

it(`<Welcome Screen /> rendered correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      maxMistakes={maxMistakes}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
