import {
    MOVIE_OPTIONS_FETCH,
    MOVIE_OPTIONS_RESULT,
    MOVIE_OPTIONS_ERROR,
    MOVIE_DETAILS_FETCH,
    MOVIE_DETAILS_RESULT,
    MOVIE_DETAILS_ERROR,
} from '../config/types';

const INITIAL_STATE = {
    options: [],

    selected: '',

    details: {}, // multiple theaters

    isLoadingOptions: false,
    isLoadingDetails: false,

    optionsError: null,
    detailsError: null,
};

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case MOVIE_OPTIONS_FETCH:
        return {
            ...state,
            isLoadingOptions: true,
        };

    case MOVIE_OPTIONS_RESULT:
        return {
            ...state,
            isLoadingOptions: false,
            options: action.payload,
        };

    case MOVIE_OPTIONS_ERROR:
        return {
            ...state,
            isLoadingOptions: false,
            pptionsError: action.payload,
        };

    case MOVIE_DETAILS_FETCH:
        return {
            ...state,
            isLoadingDetails: true,
            selected: action.payload,
        };

    case MOVIE_DETAILS_RESULT:
        return {
            ...state,
            isLoadingDetails: false,
            details: { ...state.details, [action.payload.key]: action.payload.details },
        };

    case MOVIE_DETAILS_ERROR:
        return {
            ...state,
            isLoadingDetails: false,
            detailsError: action.payload,
        };

    default:
        return state;
    }
};

export default movieReducer;
