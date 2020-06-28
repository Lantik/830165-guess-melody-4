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
  const onAnswer = jest.fn();

  const screen = shallow(<GenreQuestionScreenForTesting
    question={question}
    onAnswer={onAnswer}
    renderPlayer={() => {}}
  />);

  const form = screen.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
});

it(`Prevented form sending on submit`, () => {
  const {question} = mock;
  const formSendPrevention = jest.fn();

  const screen = shallow(<GenreQuestionScreenForTesting
    question={question}
    onAnswer={() => {}}
    renderPlayer={() => {}}
  />);

  const form = screen.find(`form`);
  form.simulate(`submit`, {
    preventDefault: formSendPrevention
  });

  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = [false, true, false, false];

  const screen = shallow(<GenreQuestionScreenForTesting
    question={question}
    onAnswer={onAnswer}
    renderPlayer={() => {}}
  />);

  const form = screen.find(`form`);
  const inputTwo = screen.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
