import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';

const REQUEST_OPTIONS = {
  api_key: '2ffe18644d276784f1ed0436b355498e',
  page: 1,
};

async function getMovieByName(query) {
  REQUEST_OPTIONS.query = query.toLowerCase().trim();
  
  const options = new URLSearchParams(REQUEST_OPTIONS);

  try {
    const response = await axios.get(`${BASE_URL}${options}`);
    
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default getMovieByName;
