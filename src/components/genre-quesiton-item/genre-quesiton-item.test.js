import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionItem from './genre-question-item.jsx';

const mock = {
  id: 0,
  answer: {
    src: `http://`,
    genre: `Rock`
  },
  userAnswers: [false, false, true, false]
};

it(`<GenreQuestionItem /> rendered correctly`, () => {
  const {id, answer, userAnswers} = mock;

  const tree = renderer
    .create(<GenreQuestionItem
      id={id}
      answer={answer}
      userAnswers={userAnswers}
      onChange={() => {}}
      renderPlayer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
