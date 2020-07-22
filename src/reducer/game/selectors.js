import Namespace from '../namespace.js';

const NAMESPACE = Namespace.GAME;

export const getStep = (state) => {
  return state[NAMESPACE].step;
};

export const getMistakes = (state) => {
  return state[NAMESPACE].mistakes;
};

export const getMaxMistakes = (state) => {
  return state[NAMESPACE].maxMistakes;
};
