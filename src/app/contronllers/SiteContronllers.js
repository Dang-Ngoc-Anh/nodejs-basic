const Song = require('../model/song')

class SiteContronller {
    //Get home
    index( req , res , next ) {
    //   Song.find({} , (err , song) => {
    //     if(!err) 
    //         res.json(song)
    //     else 
    //         res.status(500).json({err})
        
    //   })

      Song.find({})
        .then(songs => {
            songs = songs.map(song => song.toObject())
            res.render('home' , {song : songs} ) 
        })
        .catch(err => next(err))
    };

    //get search
    search(req , res  ){
        res.render('search')
    }
}

module.exports = new SiteContronller