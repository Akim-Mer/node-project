const express = require('express');
const { getContacts } = require('../controller/contact-controller');

const router = express.Router();

router.get('/contacts', getContacts);

module.exports = router;