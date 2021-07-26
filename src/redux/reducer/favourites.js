import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../types';

const reducer = (favourites = [], action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            let val = null;
            val = favourites.find(movie => movie.id === action.payload.id);
            if (val !== undefined) {
                return favourites;
            }
            return [...favourites, action.payload];
        case REMOVE_FROM_FAVOURITES:
            return favourites.filter((movie) => movie.id !== action.payload.id);
        default:
            return favourites;
    }
}

export default reducer;