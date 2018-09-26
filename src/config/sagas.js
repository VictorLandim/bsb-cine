import Expo from 'expo';
import {
    takeEvery, call, put, select,
} from 'redux-saga/effects';
import moment from 'moment';
import {
    THEATER_OPTIONS_FETCH,
    THEATER_OPTIONS_RESULT,
    THEATER_OPTIONS_ERROR,
    MOVIE_OPTIONS_FETCH,
    MOVIE_OPTIONS_RESULT,
    MOVIE_OPTIONS_ERROR,
    THEATER_DETAILS_FETCH,
    THEATER_DETAILS_RESULT,
    THEATER_DETAILS_ERROR,
    MOVIE_DETAILS_FETCH,
    MOVIE_DETAILS_RESULT,
    MOVIE_DETAILS_ERROR,
} from './types';
import {
    getTheaterDetails,
    getMovieDetails,
    getMovieOptions,
    getTheaterOptions,
} from '../requests';

const MOVIE_OPTIONS_EXPIRES_IN = '1d';
const THEATERS_OPTIONS_EXPIRES_IN = '30d';

function* fetchMovieOptions() {
    try {
        let movieOptions;
        const movieOptionsStorage = yield call([Expo.SecureStore, 'getItemAsync'], 'MOVIE_OPTIONS');
        const movieOptionsStorageDate = yield call(
            [Expo.SecureStore, 'getItemAsync'],
            'MOVIE_OPTIONS_DATE',
        );

        if (
            movieOptionsStorage === null
            || moment(movieOptionsStorageDate)
                .add(MOVIE_OPTIONS_EXPIRES_IN)
                .isSameOrAfter(moment())
        ) {
            // key does not exist or
            // key has expired
            console.log('SAGA: MOVIE NOT FOUND IN STORAGE OR EXPIRED');
            movieOptions = yield call(getMovieOptions);
            yield call(
                [Expo.SecureStore, 'setItemAsync'],
                'MOVIE_OPTIONS',
                JSON.stringify(movieOptions),
            );
            yield call(
                [Expo.SecureStore, 'setItemAsync'],
                'MOVIE_OPTIONS_DATE',
                moment().toISOString(),
            );
        } else {
            console.log('SAGA: MOVIE FOUND IN STORAGE');
            movieOptions = JSON.parse(movieOptionsStorage);
        }

        yield put({ type: MOVIE_OPTIONS_RESULT, payload: movieOptions });
    } catch (e) {
        yield put({ type: MOVIE_OPTIONS_ERROR, payload: e });
    }
}

function* fetchTheaterOptions() {
    try {
        let theaterOptions;
        const theaterOptionsStorage = yield call(
            [Expo.SecureStore, 'getItemAsync'],
            'THEATER_OPTIONS',
        );
        const theaterOptionsStorageDate = yield call(
            [Expo.SecureStore, 'getItemAsync'],
            'THEATER_OPTIONS_DATE',
        );

        if (
            theaterOptionsStorage === null
            || moment(theaterOptionsStorageDate)
                .add(THEATERS_OPTIONS_EXPIRES_IN)
                .isSameOrAfter(moment())
        ) {
            // key does not exist or
            // key has expired
            console.log('SAGA: THEATER NOT FOUND IN STORAGE OR EXPIRED');
            theaterOptions = yield call(getTheaterOptions);
            yield call(
                [Expo.SecureStore, 'setItemAsync'],
                'THEATER_OPTIONS',
                JSON.stringify(theaterOptions),
            );
            yield call(
                [Expo.SecureStore, 'setItemAsync'],
                'THEATER_OPTIONS_DATE',
                moment().toISOString(),
            );
        } else {
            console.log('SAGA: THEATER FOUND IN STORAGE');
            theaterOptions = JSON.parse(theaterOptionsStorage);
        }
        yield put({ type: THEATER_OPTIONS_RESULT, payload: theaterOptions });
    } catch (e) {
        yield put({ type: THEATER_OPTIONS_ERROR, payload: e });
    }
}

const getDetailsFromState = (state, store, movie) => state[store].details[movie];

function* fetchMovieDetails({ payload }) {
    const { key, url } = payload;

    try {
        let details = yield select(getDetailsFromState, 'movie', key);
        if (!details) {
            details = yield call(getMovieDetails, url);
        }

        yield put({ type: MOVIE_DETAILS_RESULT, payload: { key, details } });
    } catch (e) {
        yield put({ type: MOVIE_DETAILS_ERROR, payload: e });
    }
}

function* fetchTheaterDetails({ payload }) {
    const { key, url } = payload;
    try {
        let details = yield select(getDetailsFromState, 'theater', key);
        if (!details) {
            details = yield call(getTheaterDetails, url);
        }
        yield put({ type: THEATER_DETAILS_RESULT, payload: { key, details } });
    } catch (e) {
        yield put({ type: THEATER_DETAILS_ERROR, payload: e });
    }
}

function* routeSaga() {
    yield takeEvery(THEATER_OPTIONS_FETCH, fetchTheaterOptions);
    yield takeEvery(MOVIE_OPTIONS_FETCH, fetchMovieOptions);
    yield takeEvery(THEATER_DETAILS_FETCH, fetchTheaterDetails);
    yield takeEvery(MOVIE_DETAILS_FETCH, fetchMovieDetails);
}

export default routeSaga;
