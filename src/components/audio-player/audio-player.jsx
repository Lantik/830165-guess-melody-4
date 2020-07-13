import React from 'react';
import PropTypes from 'prop-types';
import withAudio from '../../hocs/with-audio/with-audio.js';

const AudioPlayer = ({isLoading, isPlaying, onPlayButtonClick, children}) => {
  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        {children}
      </div>
    </React.Fragment>);
};

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export {AudioPlayer};
export default withAudio(AudioPlayer);
