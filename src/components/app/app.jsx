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
    const {
      maxMistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step,
      mistakes
    } = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length || mistakes >= maxMistakes) {
      return (
        <WelcomeScreen
          maxMistakes={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
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
      <Switch>
        <Route exact path="/dev-component">
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
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  maxMistakes: state.maxMistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
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
