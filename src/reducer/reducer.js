import {combineReducers} from 'redux';
import {reducer as game} from './game/game.js';
import Namespace from './namespace.js';

export default combineReducers({
  [Namespace.GAME]: game
});
