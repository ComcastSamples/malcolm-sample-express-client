/**
* Copyright 2017 Comcast Cable Communications Management, LLC *
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at *
* http://www.apache.org/licenses/LICENSE-2.0 *
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License. */

'use strict';

global.__base = __dirname + '/';

var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

var malcolm        = require('malcolm');
var mathController = require('./controllers/math.js');

// malcolm-related routes; use your preferred URLs, if you include at all
app.get   ('/vsn',              malcolm.expressVersion);
app.get   ('/doc',              malcolm.expressDoc);
app.post  ('/fakeDataResponse', malcolm.expressAddFakeDataResponse);
app.delete('/fakeDataResponse', malcolm.expressClearFakeDataResponse);

// add routes using malcolm
malcolm.init({
    raml : 'api/math.raml',
    jx   : 'api/math.jx.json'
}, function(err) {
    if ( err ) { console.log('Malcolm initialization error:'); console.log(err); return; }

    // Add routes all at once
    malcolm.addExpressRoutes(app, module, true);

    // Or, add routes one at a time
    /*
    malcolm.addExpressRoute(app, '/version',              'GET',  mathController.getVersionNumber);
    malcolm.addExpressRoute(app, '/addallnumbers_get',    'GET',  mathController.addAllNumbers);
    malcolm.addExpressRoute(app, '/addallnumbers_post',   'POST', mathController.addAllNumbers);
    malcolm.addExpressRoute(app, '/generaterandomnumber', 'GET',  mathController.generateRandomNumber);
    */
});
