import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionItem = ({id, answer, userAnswers, onChange, renderPlayer}) => {
  return (
    <div className="track">
      {renderPlayer(answer.src, id)}
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${id}`} id={`answer-${id}`}
          checked={userAnswers[id]}
          onChange={(evt) => onChange(evt.target.checked, id)}/>
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

GenreQuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }),
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default GenreQuestionItem;
