import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  question: {
    type: `genre`,
    genre: `genre-one`,
    answers: [{
      src: ``,
      genre: `genre-one`
    }, {
      src: ``,
      genre: `genre-two`
    }, {
      src: ``,
      genre: `genre-three`
    }, {
      src: ``,
      genre: `genre-four`
    }]
  }
};

it(`<GenreQuestionScreen/> rendered correctly`, () => {
  const {question} = mock;

  const tree = renderer
    .create(<GenreQuestionScreen
      question={question}
      onAnswer={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
