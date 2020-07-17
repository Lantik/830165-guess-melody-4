import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AudioPlayer} from './audio-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Invokes callback function on play button click`, () => {
  const hadlePlayButtonClick = jest.fn();

  const audioPlayer = Enzyme.shallow(<AudioPlayer
    isLoading={true}
    isPlaying={true}
    onPlayButtonClick={hadlePlayButtonClick}
  >
    <audio></audio>
  </AudioPlayer>);

  const playButton = audioPlayer.find(`.track__button`).first();

  playButton.simulate(`click`);
  expect(hadlePlayButtonClick).toHaveBeenCalledTimes(1);
});
