import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const onWelcomeButtonClickHandler = () => {};

const App = ({errorsCount}) => {
  return (<React.Fragment>
    <WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeButtonClick={onWelcomeButtonClickHandler}>
    </WelcomeScreen>
  </React.Fragment>);
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
