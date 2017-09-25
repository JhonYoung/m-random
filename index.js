
var N = require('./lib/number');
var S = require('./lib/string');
var D = require('./lib/date');

var MRandom = {
    Number: N.Number,
    String: S.String,
    Date: D.Date
}

module.exports = MRandom;