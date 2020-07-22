import {reducer, ActionType, ActionCreator} from './data.js';


describe(`Data Reducer`, () => {
  it(`reducer loads new questions`, () => {
    const state = {};
    const questions = [{id: 1}, {id: 2}, {id: 3}];

    const result = reducer(state, {
      type: ActionType.LOAD_QUESTIONS,
      payload: questions
    });

    expect(result).toEqual({questions});
  });

  it(`reducer replaces old questions with new ones`, () => {
    const state = { questions:[ {id: 4}, {id: 5}, {id: 6}]};
    const questions = [{id: 1}, {id: 2}, {id: 3}];

    const result = reducer(state, {
      type: ActionType.LOAD_QUESTIONS,
      payload: questions
    });

    expect(result).toEqual({questions});
  });
});

describe(`Data ActionCreator`, () => {
  it(`Action creator loads questions`, () => {
    const state = {};
    const questions = [{id: 1}, {id: 2}, {id: 3}];

    const result = reducer(state, ActionCreator.loadQuetions(questions));

    expect(result).toEqual({questions});
  });
});
