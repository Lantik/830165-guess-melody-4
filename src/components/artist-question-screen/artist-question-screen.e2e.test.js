import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  question: {
    type: `artist`,
    song: {
      src: ``,
      artist: `one`
    },
    answers: [{
      picture: `pic-one`,
      artist: `one`,
    }, {
      picture: `pic-two`,
      artist: `two`,
    }, {
      picture: `pic-three`,
      artist: `three`,
    }
    ]
  }
};

const mockEvent = {
  preventDefault() {}
};


it(`Click on answer invoked callback function`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);
  expect(onAnswer).toHaveBeenCalledTimes(1);
});

it(`Click on answer passed to the callback data object from which this answer was created`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `one`,
    picture: `pic-one`
  };

  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
