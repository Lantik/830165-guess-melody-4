import {combineReducers} from 'redux';
import {reducer as game} from './game/game.js';
import {reducer as data} from './data/data.js';
import Namespace from './namespace.js';

export default combineReducers({
  [Namespace.GAME]: game,
  [Namespace.DATA]: data
});
