import React from 'react';
import PropTypes from 'prop-types';
import Mistakes from '../mistakes/mistakes.jsx';
import {GAME_TYPE} from '../../const/game.js';

const GameScreen = (props) => {
  const {type, mistakes} = props;

  return (
    <section className="game">
      <header className={`game__header game--${type}`}>
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>
        <Mistakes count={mistakes}/>
      </header>
      {props.children}
    </section>
  );
};

GameScreen.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([GAME_TYPE.ARTIST, GAME_TYPE.GENRE]).isRequired,
  mistakes: PropTypes.number.isRequired
};

export default GameScreen;
