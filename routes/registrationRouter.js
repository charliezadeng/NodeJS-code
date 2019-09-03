

const express = require('express');
const router = express.Router();

const { getregistrationData } = require('../controllers/registrationController');

router.get('/', getregistrationData);

module.exports = router;
