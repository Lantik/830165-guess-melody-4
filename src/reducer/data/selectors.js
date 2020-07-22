import {createSelector} from 'reselect';
import Namespace from '../namespace.js';
import {GAME_TYPE} from '../../const/game.js';

const NAMESPACE = Namespace.DATA;

const randomFilter = () => {
  return Math.random() > 0.5;
};


export const getQuestions = (state) => {
  return state[NAMESPACE].questions;
};

export const getArtistQuestions = createSelector(
    getQuestions,
    randomFilter,
    (questions, isChosen) => {
      return questions.filter((it) => isChosen && it.type === GAME_TYPE.ARTIST);
    }
);

export const getRandomGenreQuestions = createSelector(
    getQuestions,
    randomFilter,
    (questions, isChosen) => {
      return questions.filter((it) => isChosen && it.type === GAME_TYPE.GENRE);
    }
);
