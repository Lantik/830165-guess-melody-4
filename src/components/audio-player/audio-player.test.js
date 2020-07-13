import React from 'react';
import renderer from 'react-test-renderer';
import {AudioPlayer} from './audio-player.jsx';

it(`<AudioPlayer/> component rendered correctly`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={true}
      isLoading={true}
      onPlayButtonClick={() => {}}
    >
      <audio></audio>
    </AudioPlayer>).toJSON();

  expect(tree).toMatchSnapshot();
});
