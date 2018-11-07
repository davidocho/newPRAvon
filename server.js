
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.join(__dirname, 'public')))
app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});