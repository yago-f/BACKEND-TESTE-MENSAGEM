const express = require('express');
const router = express.Router();
const inperaWhatsAppRoute = require('./inperaWhatsAppRoute');

router.use('/inperaWhatsApp', inperaWhatsAppRoute);

module.exports = router;
