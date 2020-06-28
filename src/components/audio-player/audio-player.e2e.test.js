import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  song: {
    src: `http://test.music.com/test-melody.mp4`
  }
};

it(`Invokes callback function on play button click`, () => {
  const hadlePlayButtonClick = jest.fn();
  const {song} = mock;
  const audioPlayer = Enzyme.shallow(<AudioPlayer
    src={song.src}
    isPlaying={true}
    onPlayButtonClick={hadlePlayButtonClick}
  />, {disableLifecycleMethods: true});

  const playButton = audioPlayer.find(`.track__button`).first();

  playButton.simulate(`click`);
  expect(hadlePlayButtonClick).toHaveBeenCalledTimes(1);
});
