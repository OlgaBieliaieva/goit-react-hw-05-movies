import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const REQUEST_OPTIONS = {
  api_key: '2ffe18644d276784f1ed0436b355498e',
};

export function getMovieById(id) {
  REQUEST_OPTIONS.movie_id = id;

  try {
    const response = axios.get(
      `${BASE_URL}${REQUEST_OPTIONS.movie_id}?api_key=${REQUEST_OPTIONS.api_key}`
    );

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export function getCastById(id) {
  REQUEST_OPTIONS.movie_id = id;

  try {
    const response = axios.get(
      `${BASE_URL}${REQUEST_OPTIONS.movie_id}/credits?api_key=${REQUEST_OPTIONS.api_key}`
    );

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export function getReviewsById(id) {
  REQUEST_OPTIONS.movie_id = id;

  try {
    const response = axios.get(
      `${BASE_URL}${REQUEST_OPTIONS.movie_id}/reviews?api_key=${REQUEST_OPTIONS.api_key}`
    );

    return response;
  } catch (error) {
    console.log(error.message);
  }
}
