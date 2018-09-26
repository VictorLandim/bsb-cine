import {
    THEATER_OPTIONS_FETCH,
    MOVIE_OPTIONS_FETCH,
    THEATER_DETAILS_FETCH,
    MOVIE_DETAILS_FETCH,
} from '../config/types';

export const fetchTheaterOptions = () => ({
    type: THEATER_OPTIONS_FETCH,
});

export const fetchMovieOptions = () => ({
    type: MOVIE_OPTIONS_FETCH,
});

export const fetchTheaterDetails = (key, url) => ({
    type: THEATER_DETAILS_FETCH,
    payload: {
        key,
        url,
    },
});

export const fetchMovieDetails = (key, url) => ({
    type: MOVIE_DETAILS_FETCH,
    payload: {
        key,
        url,
    },
});
