import { combineReducers } from 'redux';

import movies from './movies';
import favourites from './favourites';

export default combineReducers({
    movies,
    favourites
});