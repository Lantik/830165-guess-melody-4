import {extend} from '../utils/common.js';

const initialState = {
  mistakes: 0,
  step: -1
};

const ActionType = {
  INCREMENT_STEPS: `INCREMENT_STEPS`,
  SET_STEPS_TO_ZERO: `SET_STEPS_TO_ZERO`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEPS,
    payload: 1
  }),
  setStepsToZero: () => ({
    type: ActionType.SET_STEPS_TO_ZERO
  }),
  incrementMistakes: () => ({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1
  })
}

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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
