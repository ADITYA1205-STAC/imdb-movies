const axios = require('axios');
const { IMBD_URL, IMDB_API_KEY, IMDB_HOST } = require('../../config')

const instance = axios.create({
  baseURL: IMBD_URL,
  headers: {
    'X-RapidAPI-Key': IMDB_API_KEY, 
    'X-RapidAPI-Host': IMDB_HOST
  }
});
 

const searchIMDB = async (search) => {
  try {
    const { data } = await instance.get('', { params: { s: search } });
    return data.search.filter(result => result.score === 0);
  } catch(err) {
    throw new Error(err);
  }
}

const getMovieDetails = async (search) => {
  const movies = await searchIMDB(search);
  if (!movies.length) {
    return null;
  }
  const { data } = await instance.get('', { params: { i: movies[0].id } });
  return {
    id: data?.imdbid,
    title: data?.title,
    year: data?.year,
    rating: data?.ratings.find((rating) => rating.source === 'imdb')?.value,
    generas: []
  };
}

module.exports = {
  getMovieDetails,
}