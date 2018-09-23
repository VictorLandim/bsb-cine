// get sessions for a movie
// https://api-content.ingresso.com/v0/sessions/city/${cityId}/event/${eventId}

// get theaters for a city
// https://api-content.ingresso.com/v0/theaters/city/${cityId}

// get movies for city and teather
// https://api-content.ingresso.com/v0/sessions/city/${cityId}/theater/${theaterId}?partnership=nome_da_parceria

// eventId -> A freira -> 20974
// theaterId -> iguatemi -> 847
// cityId -> bsb -> 12

// maybe randomize ?partnership? -> https://...?partnership=nome_da_parceria

import axios from 'axios';

const CITY_ID = 12; // Brasília

export const getSessionsForMovie = async eventId => axios.get(`https://api-content.ingresso.com/v0/sessions/city/${CITY_ID}/event/${eventId}`);

export const getTeathers = async () => axios.get(`https://api-content.ingresso.com/v0/theaters/city/${cityId}`);

export const getMoviesForTheater = async theaterId => axios.get(`https://api-content.ingresso.com/v0/sessions/city/${cityId}/theater/${theaterId}`);
