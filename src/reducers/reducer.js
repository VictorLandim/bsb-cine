import {
    OPTIONS_FETCH,
    OPTIONS_RESULT,
    OPTIONS_ERROR,
    THEATER_DETAILS_FETCH,
    THEATER_DETAILS_RESULT,
    THEATER_DETAILS_ERROR,
    MOVIE_DETAILS_FETCH,
    MOVIE_DETAILS_RESULT,
    MOVIE_DETAILS_ERROR,
} from '../config/types';

const INITIAL_STATE = {
    movieOptions: [],
    theaterOptions: [],

    selectedMovie: '',
    selectedTheater: '',

    movieDetails: {},
    theaterDetails: {},

    isLoadingOptions: false,
    isLoadingMovieDetails: false,
    isLoadingTheaterDetails: false,

    optionsError: null,
    theaterDetailsError: null,
    movieDetailsError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case OPTIONS_FETCH:
        return {
            ...state,
            isLoadingOptions: true,
        };

    case OPTIONS_ERROR:
        return {
            ...state,
            isLoadingOptions: false,
            optionsError: action.payload,
        };

    case OPTIONS_RESULT:
        return {
            ...state,
            isLoadingOptions: false,
            movieOptions: action.payload.movieOptions,
            theaterOptions: action.payload.theaterOptions,
        };

    case THEATER_DETAILS_FETCH:
        return {
            ...state,
            isLoadingTheaterDetails: true,
            selectedTheater: action.payload,
            selectedMovie: '',
        };

    case THEATER_DETAILS_ERROR:
        return {
            ...state,
            isLoadingTheaterDetails: false,
            theaterDetailsError: action.payload,
        };

    case THEATER_DETAILS_RESULT:
        return {
            ...state,
            isLoadingTheaterDetails: false,
            theaterDetails: action.payload,
        };

    case MOVIE_DETAILS_FETCH:
        return {
            ...state,
            isLoadingMovieDetails: true,
            selectedMovie: action.payload,
            selectedTheater: '',
        };

    case MOVIE_DETAILS_ERROR:
        return {
            ...state,
            isLoadingMovieDetails: false,
            movieDetailsError: action.payload,
        };

    case MOVIE_DETAILS_RESULT:
        return {
            ...state,
            isLoadingMovieDetails: false,
            movieDetails: action.payload,
        };

    default:
        return state;
    }
};

export default reducer;
