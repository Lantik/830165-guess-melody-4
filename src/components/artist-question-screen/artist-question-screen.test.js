import React from 'react';
import renderer from 'react-test-renderer';
import {ArtistQuestionScreenForTesting} from './artist-question-screen.jsx';

const mock = {
  question: {
    type: `artist`,
    song: {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
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
    .create(<ArtistQuestionScreenForTesting
      question={question}
      onAnswer={()=>{}}
      renderPlayer={(src, id) => (<div className="player">src: {src}; id: {id}</div>)}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
