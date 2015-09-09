/*
 Copyright 2015, Google, Inc.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
"use strict";

var express = require('express');

var app = express();

// [START AWESOME APP]
/* Say hello! */
app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/index', function (req, res) {
  res.redirect('/index.html');
});

app.get('/about', function (req, res) {
  res.redirect('/index.html');
});

app.get('/resume', function (req, res) {
  res.redirect('/resume.html');
});

app.get('/sorting', function (req, res) {
  res.redirect('/sorting/index.html');
});

app.use(express.static('views'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/sorting', express.static(__dirname + '/sorting'));

// [END AWESOME APP]

// Error Helpers
app.get('/404', function(req, res, next){
  // trigger a 404 since no other middleware
  // will match /404 after this one, and we're not
  // responding here
  next();
});

app.use(function(req, res, next){

  // [PATCH] respond with homepage page for now for any incorrect address.
  if (req.accepts('html')) {
    res.redirect('/index.html');
    return;
  }

  res.status(404);
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// [START server]
/* Start the server */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function () {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log("Press Ctrl+C to quit.");
});
// [END server]
