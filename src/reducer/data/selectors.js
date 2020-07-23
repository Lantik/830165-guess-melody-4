import Namespace from '../namespace.js';

const NAMESPACE = Namespace.DATA;

export const getQuestions = (state) => {
  return state[NAMESPACE].questions;
};
