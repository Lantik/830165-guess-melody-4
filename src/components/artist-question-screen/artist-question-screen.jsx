import React from 'react';
import PropTypes from 'prop-types';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player.js';

const ArtistQuestionScreen = ({question, onAnswer, renderPlayer}) => {
  const {answers, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, i) =>
          <div key={answer.artist} className="artist">
            <input
              className="artist__input visually-hidden"
              type="radio"
              name="answer"
              value={`answer-${i}`} id={`answer-${i}`}
              checked={false}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}/>
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
              {answer.artist}
            </label>
          </div>
        )}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export {ArtistQuestionScreen as ArtistQuestionScreenForTesting};
export default withAudioPlayer(ArtistQuestionScreen);
