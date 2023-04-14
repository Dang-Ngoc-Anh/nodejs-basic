const Song = require('../model/song')

class SongContronller {
    //Get home
    show( req , res, next ) {
        Song.findOne({author: req.params.author})
            .then(song => {
                song = song.toObject();
                // return res.send(song)
                res.render('songs/show' , {songs : song})
            })
            .catch(next)
        // res.send( req.params.author)
    };
}

module.exports = new SongContronller