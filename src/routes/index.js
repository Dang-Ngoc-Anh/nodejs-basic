
const siteRouter = require('./site')
const newRoute = require('./news')
const SongRouter = require('./song')

function route(app){
    app.use('/news' , newRoute );
    app.use('/song' , SongRouter );
    app.use('/' , siteRouter );
}

module.exports = route
    
