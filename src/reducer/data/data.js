import {extend} from '../../utils/common.js';

const initialState = {
  questions: []
};

const ActionType = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`
};

const ActionCreator = {
  loadQuetions: (questions) => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  })
};

const Operation = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuetions(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS: {
      return extend(state, {
        questions: action.payload
      });
    }
    default: {
      return state;
    }
  }
};

export {reducer, ActionType, ActionCreator, Operation};
