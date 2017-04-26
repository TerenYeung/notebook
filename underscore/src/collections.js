
let {print} = require('util');

let _ = require('underscore');

// console.log(_);

//遍历方法
let l1 = [1,2,3,4,5];
let l1_1 = _.map(l1,(val)=> val*3 )
// print(l1_1)

let l2 = [1,2,3];
_.each(l2,(val)=>print(val));

