const newRoute = require('./news')
const siteRouter = require('./site')
function route(app){
    app.use('/news' , newRoute );
    app.use('/' , siteRouter );
}

module.exports = route
    
