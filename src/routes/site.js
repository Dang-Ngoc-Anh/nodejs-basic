const express = require('express');
const router = express.Router();


const SiteContronller = require('../app/contronllers/SiteContronllers');

router.get('/search' , SiteContronller.search);
router.get('/' , SiteContronller.index);

module.exports = router;