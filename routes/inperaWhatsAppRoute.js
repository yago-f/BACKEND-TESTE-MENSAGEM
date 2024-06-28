const express = require('express');
const router = express.Router();
const multer = require('multer');
const { postMessage } = require('../controllers/inperaWhatsAppControler');
const upload = multer();

router.post('/', upload.single('midia'), postMessage);

module.exports = router;
