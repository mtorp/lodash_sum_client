const lodash = require('lodash');
const thisArg = { p: 42 };

// 330
console.log(lodash.sum([1, '2', 3], function (x) { return x + this.p }, thisArg)); 
// 85
console.log(lodash.sum({x : {p: 42}, y: {p: '43'}}, 'p'));
