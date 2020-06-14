import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;

  return <React.Fragment>
    <WelcomeScreen errorsCount={errorsCount}></WelcomeScreen>
  </React.Fragment>;
};

export default App;
