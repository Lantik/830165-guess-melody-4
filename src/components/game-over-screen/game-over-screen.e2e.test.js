import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameOverScreen from './game-over-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<GameOverScreen /> invokes callback function on replay button click`, () => {
  const handleReplayButtonClick = jest.fn();
  const component = shallow(<GameOverScreen
    onReplayButtonClick={handleReplayButtonClick}
  />);
  const replayButton = component.find(`.replay`).first();

  replayButton.simulate(`click`);

  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
