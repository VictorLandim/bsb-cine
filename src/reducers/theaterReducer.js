import {
    THEATER_OPTIONS_FETCH,
    THEATER_OPTIONS_RESULT,
    THEATER_OPTIONS_ERROR,
    THEATER_DETAILS_FETCH,
    THEATER_DETAILS_RESULT,
    THEATER_DETAILS_ERROR,
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

const theaterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case THEATER_OPTIONS_FETCH:
        return {
            ...state,
            isLoadingOptions: true,
        };

    case THEATER_OPTIONS_RESULT:
        return {
            ...state,
            isLoadingOptions: false,
            options: action.payload,
        };

    case THEATER_OPTIONS_ERROR:
        return {
            ...state,
            isLoadingOptions: false,
            pptionsError: action.payload,
        };

    case THEATER_DETAILS_FETCH:
        return {
            ...state,
            isLoadingDetails: true,
            selected: action.payload,
        };

    case THEATER_DETAILS_RESULT:
        return {
            ...state,
            isLoadingDetails: false,
            details: { ...state.details, [action.payload.key]: action.payload.details },
        };

    case THEATER_DETAILS_ERROR:
        return {
            ...state,
            isLoadingDetails: false,
            detailsError: action.payload,
        };

    default:
        return state;
    }
};

export default theaterReducer;
