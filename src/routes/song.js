const express = require('express');
const router = express.Router();


const songContronller = require('../app/contronllers/SongController');
const createSongContronller = require('../app/contronllers/CreateSong');
const updateContronller = require('../app/contronllers/UpdateContronller');

router.get("/create" , createSongContronller.show)
router.post("/store" , createSongContronller.store)
router.get("/list-song" , updateContronller.show)
router.get("/:_id/edit" , updateContronller.edit)
router.put("/:_id" , updateContronller.update)
router.get("/:author", songContronller.show);
// router.get('/song' , SongContronller.index);

module.exports = router;