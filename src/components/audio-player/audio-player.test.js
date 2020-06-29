import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  song: {
    src: `http://test.music.com/test-melody.mp4`
  }
};

it(`<AudioPlayer/> component rendered correctly`, () => {
  const {song} = mock;
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={true}
      src={song.src}
      onPlayButtonClick={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
