import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?';

const REQUEST_OPTIONS = {
  api_key: '2ffe18644d276784f1ed0436b355498e',
};

async function getTrending() {
  const options = new URLSearchParams(REQUEST_OPTIONS);

  try {
    const response = await axios.get(`${BASE_URL}${options}`);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default getTrending;
