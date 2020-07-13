import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying
      };

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    }

    componentDidMount() {
      const audio = this._audioRef.current;
      audio.src = this.props.src;

      audio.oncanplaythrough = () => this.setState({
        isLoading: false
      });
      audio.onplay = () => this.setState({
        isPlaying: true
      });
      audio.onpause = () => this.setState({
        isPlaying: false
      });
      audio.ontimeupdate = () => this.setState({
        progress: Math.floor(audio.currentTime)
      });
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;
      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
    }

    _handlePlayButtonClick() {
      const {onPlayButtonClick} = this.props;
      const {isPlaying} = this.state;

      this.setState({isPlaying: !isPlaying});
      onPlayButtonClick();
    }

    render() {
      const {isLoading, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayButtonClick={this._handlePlayButtonClick}
        >
          <audio ref={this._audioRef}/>
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired
  };

  return WithAudio;
};

export default withAudio;
