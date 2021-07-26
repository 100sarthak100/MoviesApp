import { FETCH_MOVIES } from '../types';

const reducer = (movies=[], action) => {
    switch(action.type) {
        case FETCH_MOVIES:
            return action.payload;
        default:
                return movies;
    }
}

export default reducer;