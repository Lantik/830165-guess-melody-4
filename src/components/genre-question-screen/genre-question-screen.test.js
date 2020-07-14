import React from 'react';
import renderer from 'react-test-renderer';
import {GenreQuestionScreenForTesting} from './genre-question-screen.jsx';

const mock = {
  question: {
    type: `genre`,
    genre: `genre-one`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `genre-one`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `genre-two`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `genre-three`
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `genre-four`
    }]
  }
};

it(`<GenreQuestionScreen/> rendered correctly`, () => {
  const {question} = mock;

  const tree = renderer
    .create(<GenreQuestionScreenForTesting
      question={question}
      onAnswer={() => {}}
      onChange={() => {}}
      userAnswers={[false, false, false, false]}
      renderPlayer={(src, id) => (<div className="player">src: {src}; id: {id}</div>)}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<GenreQuestionScreen/> rendered correctly`, () => {
  const {question} = mock;

  const tree = renderer
    .create(<GenreQuestionScreenForTesting
      question={question}
      onAnswer={() => {}}
      onChange={() => {}}
      userAnswers={[true, false, true, false]}
      renderPlayer={(src, id) => (<div className="player">src: {src}; id: {id}</div>)}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
