import {reducer, ActionType, ActionCreator} from './game.js';
import {GAME_TYPE} from '../../const/game.js';

describe(`Game Reducer`, () => {
  test.each([[1, 1], [2, 2], [3, 3]])(`reducer increment mistakes by %i`, (payload, expectedMistakes) => {
    const state = {mistakes: 0};

    const result = reducer(state, {
      type: ActionType.INCREMENT_MISTAKES,
      payload
    });

    const expectedResult = {mistakes: expectedMistakes};
    expect(result).toEqual(expectedResult);
  });

  it(`reducer returns initial state if state is not defined`, () => {
    const result = reducer(void 0, {});

    expect(result).toBeDefined();
  });

  test.each([[1, 0], [2, 1], [3, 2]])(`reducer increment step by %i`, (payload, expectedStep) => {
    const state = {step: -1};

    const result = reducer(state, {
      type: ActionType.INCREMENT_STEPS,
      payload
    });

    const expectedResult = {step: expectedStep};
    expect(result).toEqual(expectedResult);
  });

  test.each([[1], [2], [-4]])(`reducer set steps to zero with payload %i`, (payload) => {
    const state = {step: 4};

    const result = reducer(state, {
      type: ActionType.SET_STEPS_TO_ZERO,
      payload
    });

    const expectedResult = {step: 0};
    expect(result).toEqual(expectedResult);
  });

  test.each([[1], [2], [-4]])(`reducer set mistakes to zero with payload %i`, (payload) => {
    const state = {mistakes: 5};

    const result = reducer(state, {
      type: ActionType.SET_MISTAKES_TO_ZERO,
      payload
    });

    const expectedResult = {mistakes: 0};
    expect(result).toEqual(expectedResult);
  });

});

describe(`Action Creator sets mistakes to zero`, () => {
  test.each([[1], [-2], [10]])(`Action creator set mistakes from %i to 0`, (initialMistakesCount) => {
    const state = {mistakes: initialMistakesCount};

    const result = reducer(state, ActionCreator.setMistakesToZero());

    const expectedResult = {mistakes: 0};
    expect(result).toEqual(expectedResult);
  });
});

describe(`Action Creator sets steps to zero`, () => {
  test.each([[1], [-2], [10]])(`Action creator set steps from %i to 0`, (initialStep) => {
    const state = {step: initialStep};

    const result = reducer(state, ActionCreator.setStepsToZero());

    const expectedResult = {step: 0};
    expect(result).toEqual(expectedResult);
  });
});

describe(`Action Creator increments steps`, () => {
  test.each([[1, 0], [2, 1], [3, 2]])(`Action creator incments steps %i times`, (steps, expectedStep) => {
    let state = {step: -1};

    for (let i = 0; i < steps; i++) {
      state = reducer(state, ActionCreator.incrementStep());
    }

    const expectedResult = {step: expectedStep};
    expect(state).toEqual(expectedResult);
  });
});

describe(`Game ActionCreator increment mistakes`, () => {
  it(`Action creator increments mistakes if answer for genre question is wrong`, () => {
    let state = {mistakes: 0};
    const answer = [true, false, true, false];
    const question = {
      type: `genre`,
      genre: `rock`,
      answers: [{
        genre: `rock`,
      }, {
        genre: `blues`,
      }, {
        genre: `raggy`,
      }, {
        genre: `country`,
      }]
    };

    state = reducer(state, ActionCreator.incrementMistakes(question, answer));

    const expectedResult = {mistakes: 1};
    expect(state).toEqual(expectedResult);
  });

  it(`Action creator doesn't increment mistakes if answer for genre question is true`, () => {
    let state = {mistakes: 0};
    const answer = [true, false, true, false];
    const question = {
      type: `genre`,
      genre: `rock`,
      answers: [{
        genre: `rock`,
      }, {
        genre: `blues`,
      }, {
        genre: `rock`,
      }, {
        genre: `country`,
      }]
    };

    state = reducer(state, ActionCreator.incrementMistakes(question, answer));

    const expectedResult = {mistakes: 0};
    expect(state).toEqual(expectedResult);
  });

  it(`Action creator doesn't increment mistakes if answer for artist question is true`, () => {
    let state = {mistakes: 0};
    const answer = {
      artist: `John Lenon`
    };
    const question = {
      type: GAME_TYPE.ARTIST,
      song: {artist: `John Lenon`}
    };

    state = reducer(state, ActionCreator.incrementMistakes(question, answer));

    const expectedResult = {mistakes: 0};
    expect(state).toEqual(expectedResult);
  });

  it(`Action creator incrementa mistakes if answer for artist question is wrong`, () => {
    let state = {mistakes: 0};
    const answer = {
      artist: `Mick Jagger`
    };
    const question = {
      type: GAME_TYPE.ARTIST,
      song: {artist: `John Lenon`}
    };

    state = reducer(state, ActionCreator.incrementMistakes(question, answer));

    const expectedResult = {mistakes: 1};
    expect(state).toEqual(expectedResult);
  });
});
