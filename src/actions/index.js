import { OPTIONS_FETCH, THEATER_DETAILS_FETCH, MOVIE_DETAILS_FETCH } from '../config/types';

export const fetchOptions = () => ({
    type: OPTIONS_FETCH,
});

export const fetchTheaterDetails = theater => ({
    type: THEATER_DETAILS_FETCH,
    payload: theater,
});

export const fetchMovieDetails = movie => ({
    type: MOVIE_DETAILS_FETCH,
    payload: movie,
});
