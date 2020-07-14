import React from 'react';
import PropTypes from 'prop-types';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player.js';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.js';

const GenreQuestionScreen = ({question, onAnswer, renderPlayer, onChange, userAnswers}) => {
  const {answers, genre} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={onAnswer}>
        {answers.map((answer, i) => (
          <div className="track" key={`${i}-${answer.src}`}>
            {renderPlayer(answer.src, i)}
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                checked={userAnswers[i]}
                onChange={(evt) => onChange(evt.target.checked, i)}/>
              <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
            </div>
          </div>))}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export {GenreQuestionScreen as GenreQuestionScreenForTesting};
export default withUserAnswer(withAudioPlayer(GenreQuestionScreen));
