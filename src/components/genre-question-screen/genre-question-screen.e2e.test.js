import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreenForTesting} from './genre-question-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`Invoked callback function on submit`, () => {
  const {question} = mock;
  const userAnswers = [false, true, false, false];
  const handleAnswer = jest.fn();

  const screen = shallow(<GenreQuestionScreenForTesting
    question={question}
    onAnswer={handleAnswer}
    onChange={() => {}}
    renderPlayer={() => {}}
    userAnswers={userAnswers}
  />);

  const form = screen.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(handleAnswer).toHaveBeenCalledTimes(1);
});

it(`Invoked callback function on change`, () => {
  const {question} = mock;
  const userAnswers = [false, true, false, false];
  const handleChange = jest.fn();

  const screen = shallow(<GenreQuestionScreenForTesting
    question={question}
    onAnswer={() => {}}
    onChange={handleChange}
    renderPlayer={() => {}}
    userAnswers={userAnswers}
  />);

  const inputTwo = screen.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});

  expect(handleChange).toHaveBeenCalledTimes(1);
});

