import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../api.js';
import {reducer, ActionType, ActionCreator, Operation} from './data.js';


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
    const state = {questions: [{id: 4}, {id: 5}, {id: 6}]};
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

describe(`Data Operation`, () => {
  it(`Operation loaad questions`, () => {
    const dispatch = jest.fn();
    const api = createApi();
    const apiMock = new MockAdapter(api);
    const questinLoader = Operation.loadQuestions();

    apiMock
      .onGet(`/questions`)
      .reply(200, [{fake: true}]);

    return questinLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_QUESTIONS,
          payload: [{fake: true}]
        });
      });
  });
});
