'use strict';

/*
 * Returns version number
 */
var getVersionNumber = function(params, callback) {
    // read version info from package file
    var pjson = require(__base + 'package.json');
    var resultObject = {
        'name': pjson.name,
        'version': pjson.version
    };
    var err = null;

    if ( err ) {
        callback(err);
    } else {
        callback(null, resultObject);
    }
};



/*
 * Adds all numbers passed in params
 */
var addAllNumbers = function(params, callback) {
    var err = null;
    var numbers = null;

    try {
        numbers = JSON.parse(params.list_of_numbers);
    } catch (e) {
        err = 'list_of_numbers should be a valid json string';
    }

    if ( err ) { callback(err); }

    var sum = 0;
    for(var i in numbers) { sum += numbers[i]; }

    callback(null, { 'sum': sum });
};



/*
 * Generates random between 0 and specified ceiling. If no ceiling value passed default is used.
 */
var generateRandomNumber = function(params, callback) {
    var err = null;

    var rnd = Math.random() * (params.ceiling);

    if ( err ) {
        callback(err);
    } else {
        callback(null, { 'random_number': Math.round(rnd) });
    }
};



exports.getVersionNumber     = getVersionNumber;
exports.addAllNumbers        = addAllNumbers;
exports.generateRandomNumber = generateRandomNumber;
