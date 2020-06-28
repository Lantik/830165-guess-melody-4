import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withAudioPlayer from './with-audio-player.js';

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    id: 0
  }
};

const TestComponent = ({renderPlayer, song}) => {
  const {src, id} = song;

  return (
    <div>{renderPlayer(src, id)}</div>
  );
};

TestComponent.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  song: PropTypes.shape({
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

it(`Hoc adds audio player to component`, () => {
  const {song} = mock;
  const TestComponentWithAudioPlayer = withAudioPlayer(TestComponent);

  let tree = renderer
    .create(<TestComponentWithAudioPlayer
      song={song}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
