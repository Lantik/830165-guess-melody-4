import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinScreen from './win-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<WinScreen/> invokes callback on replay button click`, () => {
  const hadleReplayButtonClick = jest.fn();
  const component = shallow(<WinScreen
    mistakesCount={3}
    questionsCount={3}
    onReplayButtonClick={hadleReplayButtonClick}
  />);
  const replayButton = component.find(`.replay`).first();

  replayButton.simulate(`click`);

  expect(hadleReplayButtonClick).toHaveBeenCalledTimes(1);
});
