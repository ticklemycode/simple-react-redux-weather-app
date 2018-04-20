import axios from 'axios';

const API_KEY = '862243dd3198b43fae1c6daef12a205f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Action types
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action Creators
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}