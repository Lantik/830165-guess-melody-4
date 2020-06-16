import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Function invoked on welcome button pressed`, () => {
  const onWelcomeButtonClickHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        onWelcomeButtonClick={onWelcomeButtonClickHandler}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);
  welcomeButton.simulate(`click`);

  expect(onWelcomeButtonClickHandler).toHaveBeenCalledTimes(1);
});
