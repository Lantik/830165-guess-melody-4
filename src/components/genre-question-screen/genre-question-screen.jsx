import React from 'react';
import PropTypes from 'prop-types';
import GenreQuestionItem from '../genre-quesiton-item/genre-question-item.jsx';
import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player.js';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.js';

const GenreQuestionScreen = ({question, onAnswer, renderPlayer, onChange, userAnswers}) => {
  const {answers, genre} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer();
      }}>
        {answers.map((answer, i) => (
          <GenreQuestionItem
            id={i}
            answer={answer}
            userAnswers={userAnswers}
            onChange={onChange}
            renderPlayer={renderPlayer}
            key={`${i}-${answer.src}`}
          />))}
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
