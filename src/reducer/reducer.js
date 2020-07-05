import {extend} from '../utils/common.js';
import {GAME_TYPE} from '../const/game.js';

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3
};

const ActionType = {
  INCREMENT_STEPS: `INCREMENT_STEPS`,
  SET_STEPS_TO_ZERO: `SET_STEPS_TO_ZERO`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  SET_MISTAKES_TO_ZERO: `SET_MISTAKES_TO_ZERO`
};

const isGenreAnswerCorrect = (question, answer) => {
  return answer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const isArtistAnswerCorrect = (question, answer) => {
  return question.artist === answer.artist;
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEPS,
    payload: 1
  }),
  setStepsToZero: () => ({
    type: ActionType.SET_STEPS_TO_ZERO
  }),
  setMistakesToZero: () => ({
    type: ActionType.SET_MISTAKES_TO_ZERO
  }),
  incrementMistakes: (question, answer) => {
    let isCorrect = false;

    switch (question.type) {
      case GAME_TYPE.GENRE: {
        isCorrect = isGenreAnswerCorrect(question, answer);
        break;
      }
      case GAME_TYPE.ARTIST: {
        isCorrect = isArtistAnswerCorrect(question, answer);
        break;
      }
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: isCorrect ? 0 : 1
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEPS:
      return extend(state, {
        step: state.step + action.payload
      });
    case ActionType.SET_STEPS_TO_ZERO:
      return extend(state, {
        step: 0
      });
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload
      });
    case ActionType.SET_MISTAKES_TO_ZERO:
      return extend(state, {
        mistakes: 0
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
