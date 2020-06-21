import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

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

it(`<ArtistQuestionScreen/> rendered correctly`, () => {
  const {question} = mock;
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={question}
      onAnswer={()=>{}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
