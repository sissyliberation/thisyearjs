var express = require('express'); 
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

console.log('server started at port '+port);
app.listen(port);