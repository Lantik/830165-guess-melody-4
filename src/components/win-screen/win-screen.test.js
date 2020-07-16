import React from 'react';
import renderer from 'react-test-renderer';
import WinScreen from './win-screen.jsx';

it(`<WinScreen /> rendered correctly`, () => {
  const tree = renderer
    .create(<WinScreen
      questionsCount={6}
      mistakesCount={3}
      onReplayButtonClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
