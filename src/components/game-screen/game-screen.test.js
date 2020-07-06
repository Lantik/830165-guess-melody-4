import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import {GAME_TYPE} from '../../const/game.js';

it(`<GameScreen /> rendered correctly.`, () => {
  const tree = renderer
    .create(<GameScreen
      type={GAME_TYPE.GENRE}
      mistakes={3}
    >
      <div></div>
    </GameScreen>).toJSON();

  expect(tree).toMatchSnapshot();
});
