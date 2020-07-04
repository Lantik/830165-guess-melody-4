import {reducer, ActionType, ActionCreator} from './reducer.js';

const initialState = {
  step: -1,
  mistakes: 0
};


it(`reducer returns initial state if state is not defined`, () => {
  const result = reducer(void 0, {});
  expect(result).toEqual(initialState);
});

test.each([[1, 0], [2, 1], [3, 2]])(`reducer increment step by %i`, (payload, expectedStep) => {
  const result = reducer(initialState, {
    type: ActionType.INCREMENT_STEPS,
    payload
  });
  const expectedResult = {
    mistakes: 0,
    step: expectedStep
  };

  expect(result).toEqual(expectedResult);
});

test.each([[1, 1], [2, 2], [3, 3]])(`reducer increment mistakes by %i`, (payload, expectedMistakes) => {
  const result = reducer(initialState, {
    type: ActionType.INCREMENT_MISTAKES,
    payload
  });
  const expectedResult = {
    mistakes: expectedMistakes,
    step: -1
  };

  expect(result).toEqual(expectedResult);
});


test.each([[1, 0], [2, 1], [3, 2]])(`Action creator incments steps %i times`, (steps, expectedStep) => {
  let state = initialState;
  
  for(let i = 0; i < steps; i++) {
    state = reducer(state, ActionCreator.incrementStep());
  }

  const expectedResult = {
    mistakes: 0,
    step: expectedStep
  };

  expect(state).toEqual(expectedResult);
});


test.each([[1, 0], [2, 1], [3, 2]])(`Action creator incments mistakes %i times`, (mistakes, expectedMistakes) => {
  let state = initialState;
  
  for(let i = 0; i < mistakes; i++) {
    state = reducer(state, ActionCreator.incrementStep());
  }

  const expectedResult = {
    mistakes: 0,
    step: expectedMistakes
  };

  expect(state).toEqual(expectedResult);
});