const express = require('express');
const router = express.Router();


const NewsContronller = require('../app/contronllers/NewsContronller');

router.use('/:slug' , NewsContronller.show);
router.use('/' , NewsContronller.index);

module.exports = router;