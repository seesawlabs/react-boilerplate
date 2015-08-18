'use strict';

var express = require('express'),
  app = express(),
  port = 8008

app.use(express.static('public'));
app.use(function(req,res,next){
  if (!/^(css|js)\/.+$/.test(req.url))
    req.url = './index.html'

  next()
})

app.listen(port, function() {
  console.log('** APPLICATION STARTED: http://localhost:' + port)
})