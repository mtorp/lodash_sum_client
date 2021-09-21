const lodash = require('lodash');
const thisArg = { p: 42 };

lodash.sum([1, 2, 3], function (x) { return x + this.p }, thisArg); 
lodash.sum({x : {p: 42}, y: {p: '43'}}, 'p');
