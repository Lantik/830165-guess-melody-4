import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withUserAnswer from './with-user-answer.js';

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => (<div/>);
const MockComponentWithUserAnswer = withUserAnswer(MockComponent);

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


it(`Hoc change answers`, () => {
  const {question} = mock;

  const component = shallow(<MockComponentWithUserAnswer
    question={question}
    onAnswer={() => {}}
  />);

  component.props().onChange(false, 0);
  expect(component.props().userAnswers).toEqual([false, false, false, false]);

  component.props().onChange(true, 1);
  expect(component.props().userAnswers).toEqual([false, true, false, false]);

  component.props().onChange(true, 2);
  expect(component.props().userAnswers).toEqual([false, true, true, false]);

  component.props().onChange(true, 3);
  expect(component.props().userAnswers).toEqual([false, true, true, true]);
});
