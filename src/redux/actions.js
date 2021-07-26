import { FETCH_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../redux/types';
import * as API from '../../src/API/index';

// action creators

// Fetch movies from API
export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await API.fetchMovies();
        const action = {
            type: FETCH_MOVIES,
            payload: data.movies
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

// Add movie to favourites
export const addToFavourites = (item) => async (dispatch) => {
    try {
        const action = {
            type: ADD_TO_FAVOURITES,
            payload: item
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}

// Remove movie from favourites
export const removeFromFavourites = (item) => async (dispatch) => {
    try {
        const action = {
            type: REMOVE_FROM_FAVOURITES,
            payload: item
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}