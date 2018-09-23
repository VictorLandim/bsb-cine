import { takeEvery, call, put } from 'redux-saga/effects';
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
} from './types';
import { getOptions, getTheaterDetails, getMovieDetails } from '../requests';

function* fetchOptions() {
    try {
        const options = yield call(getOptions);
        yield put({ type: OPTIONS_RESULT, payload: options });
    } catch (e) {
        yield put({ type: OPTIONS_ERROR, payload: e });
    }
}
function* fetchTheaterDetails({ payload }) {
    try {
        const theaterDetails = yield call(getTheaterDetails, payload);
        yield put({ type: THEATER_DETAILS_RESULT, payload: theaterDetails });
    } catch (e) {
        yield put({ type: THEATER_DETAILS_ERROR, payload: e });
    }
}

function* fetchMovieDetails({ payload }) {
    try {
        const movieDetails = yield call(getMovieDetails, payload);
        yield put({ type: MOVIE_DETAILS_RESULT, payload: movieDetails });
    } catch (e) {
        yield put({ type: MOVIE_DETAILS_ERROR, payload: e });
    }
}

function* routeSaga() {
    yield takeEvery(OPTIONS_FETCH, fetchOptions);
    yield takeEvery(THEATER_DETAILS_FETCH, fetchTheaterDetails);
    yield takeEvery(MOVIE_DETAILS_FETCH, fetchMovieDetails);
}

export default routeSaga;
