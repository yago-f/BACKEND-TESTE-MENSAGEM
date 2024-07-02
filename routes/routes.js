const express = require('express');
const router = express.Router();

module.exports = app => {
  const inperaWhatsAppRoute = require('./inperaWhatsAppRoute')(app);

  router.use('/inperaWhatsApp', inperaWhatsAppRoute);

  return router;
};
