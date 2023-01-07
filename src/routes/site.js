const express = require('express');
const router = express.Router();


const SiteContronller = require('../app/contronllers/SiteContronllers');

router.use('/search' , SiteContronller.search);
router.use('/' , SiteContronller.index);

module.exports = router;