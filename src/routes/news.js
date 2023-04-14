const express = require('express');
const router = express.Router();


const NewsContronller = require('../app/contronllers/NewsContronller');

router.get('/:slug' , NewsContronller.show);
router.get('/' , NewsContronller.index);

module.exports = router;