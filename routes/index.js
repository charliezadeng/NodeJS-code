const express = require('express');
const router = express.Router();

const registrationRouter = require('./registrationRouter');
//const genresRouter = require('./genresRouter');
//const artistsRouter = require('./artistsRouter');
//const albumsRouter = require('./albumsRouter');

router.use('/', registrationRouter);
//router.use('/genres', genresRouter);
//outer.use('/artists', artistsRouter);
//router.use('/albums', albumsRouter);

module.exports = router;