const lodash = require('lodash');
const thisArg = { p: 42 };

// 330
console.log(lodash.sumBy(lodash.map(lodash.map([1, '2', 3], (function (x) { return x + this.p }).bind(thisArg)), v => +v).filter(v => v === v))); 
// 85
console.log(lodash.sumBy(lodash.values(lodash.map(lodash.map({x : {p: 42}, y: {p: '43'}}, 'p'), v => +v).filter(v => v === v))));
