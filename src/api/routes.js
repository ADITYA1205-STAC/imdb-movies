const { Router } = require('express');
const { searchMovies, updateDetails, findMovie } = require('./imdb/imdb.controller');

const router = Router();

router.post('/movies', searchMovies)
router.get('/movie/:title', findMovie)
router.put('/movies/:id', updateDetails)

module.exports = router;