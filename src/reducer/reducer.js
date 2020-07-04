import {extend} from '../utils/common.js';

const initialState = {
  mistakes: 0,
  step: -1
};

const ActionType = {
  INCREMENT_STEPS: `INCREMENT_STEPS`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEPS,
    payload: 1
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
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
