import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import GameScreen from '../game-screen/game-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';
import WinScreen from '../win-screen/win-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import {ActionCreator} from '../../reducer/game/game.js';
import {getQuestions} from '../../reducer/data/selectors.js';

import {GAME_TYPE} from '../../const/game.js';
import {getStep, getMistakes, getMaxMistakes} from '../../reducer/game/selectors.js';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderGameScreen() {
    const {
      maxMistakes,
      questions,
      onUserAnswer,
      onBeginGameButtonClick,
      step,
      mistakes
    } = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          maxMistakes={maxMistakes}
          onWelcomeButtonClick={onBeginGameButtonClick}
        />
      );
    }

    if (mistakes >= maxMistakes) {
      return (
        <GameOverScreen
          onReplayButtonClick={onBeginGameButtonClick}
        />
      );
    }

    if (step >= questions.length) {
      return (
        <WinScreen
          mistakesCount={mistakes}
          questionsCount={questions.length}
          onReplayButtonClick={onBeginGameButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GAME_TYPE.ARTIST:
          return (
            <GameScreen type={question.type} mistakes={mistakes}>
              <ArtistQuestionScreen
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GAME_TYPE.GENRE:
          return (
            <GameScreen type={question.type} mistakes={mistakes}>
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
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onBeginGameButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  mistakes: getMistakes(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state)
});

const mapDispatchToProps = (dispatch) => ({
  onBeginGameButtonClick() {
    dispatch(ActionCreator.setStepsToZero());
    dispatch(ActionCreator.setMistakesToZero());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(question, answer));
  },
  onReplayButtonClick() {
    dispatch(ActionCreator.setStepsToZero());
    dispatch(ActionCreator.setMistakesToZero());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
