class SiteContronller {
    //Get home
    index( req , res ) {
        res.render('Home');
    };

    //get search
    search(req , res  ){
        res.render('search')
    }
}

module.exports = new SiteContronller