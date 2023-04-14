const Song = require('../model/song')
class UpdateContronller{
    show(req , res){
        Song.find({})
            .then(song => {
                song = song.map(songs => songs.toObject())
                return res.render("songs/stored" , {song})
            })
    }

    edit(req , res , next){
        Song.findById(req.params._id)
            .then(song => {
                song = song.toObject();
                return res.render("songs/edit" , {songs : song})
            })
            .catch(err => next(err))
    }

    update(req , res , next){
        
        Song.updateOne({_id: req.params._id} , req.body)
            .then(() => res.redirect('/song/list-song'))
            .catch(err => next(err))
    }

}

module.exports = new  UpdateContronller;