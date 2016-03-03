var Rx = require("rxjs");

console.log(`Using imperative loop`);
var res;
for(var i = 0; i<8; i++){
  if(i % 2 === 0)
    res = i;
};
console.log(`Last even value: ${i}`);
// -> Last even value: 8

console.log(`\nUsing observables`);
const range = Rx.Observable.range(1,8)
 .filter((val) => val % 2 === 0)
 .takeLast(1)

range.subscribe(
  (val) => { console.log(`Last even value: ${val}`) }
);
// -> Last even value: 8


