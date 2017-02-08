'use strict';

/*------------------------------------*\
  #VENDOR DEPENDENCIES
\*------------------------------------*/

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');





/*------------------------------------*\
  #CUSTOM DEPENDENCIES
\*------------------------------------*/

const config = require('./config.js');





/*------------------------------------*\
  #VARIABLES
\*------------------------------------*/

const port = process.env.PORT || config.port;





/*------------------------------------*\
  #MIDDLEWARE
\*------------------------------------*/

const app = express();

app.use(express.static(`${__dirname}/../public`)) ;
app.use(express.static(`${__dirname}/../node_modules`)) ;
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));





/*------------------------------------*\
  #DATABASE
\*------------------------------------*/

// CODE HERE





/*------------------------------------*\
  #ROUTES
\*------------------------------------*/

require('./api/masterRoutes.js')(app);




/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen(port, function() {
	console.log('Quix server is listening on port', port);
});
