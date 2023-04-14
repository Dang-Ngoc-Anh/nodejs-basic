const Song = require("../model/song")

class CreateSong {

    show(req , res  ){
       res.render('songs/create')
    }

    store(req , res , next ){
        // res.json(req.body)
        const formData = req.body
        const song = new Song(formData)
        song.save()
            .then(() => res.redirect(`/`))
            .catch(err => next(err))
    }

}

module.exports = new CreateSong