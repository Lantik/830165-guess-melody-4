import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import GameScreen from '../game-screen/game-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import {GAME_TYPE} from '../../const/game.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderGameScreen() {
    const {errorsCount, questions, onUserAnswer, onWelcomeButtonClick, step} = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GAME_TYPE.ARTIST:
          return (
            <GameScreen type={question.type}>
              <ArtistQuestionScreen
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GAME_TYPE.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreen
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }
    return null;
  }

  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderGameScreen()}
        </Route>
      </Switch>
    </BrowserRouter>);
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.setStepsToZero());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep())
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
