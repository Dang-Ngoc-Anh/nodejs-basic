const express = require("express")
const morgan = require("morgan")
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const { extname } = require("path");

const port = 3000
// routes
const router = require('./routes')

//information
// app.use(morgan("combined"))

//static file
app.use(express.static(path.join(__dirname , 'public')))

// template engine
app.engine('hbs', handlebars.engine(
  { 
    defaultLayout: 'main',
    extname : '.hbs'
  }
  ));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname , 'views'));


// init  routes  
router(app)

// listen
app.listen(port , () => console.log(`Dang chay port ${port}`))