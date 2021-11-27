//Guess the output!! (platform-dependent)
'use strict';
var radius=7;
const shape={
 radius: 5,
 diameter:function() {
     return this.radius*2;
 },
 diameter2:()=> this.radius*2
}
console.log(shape.diameter());
console.log(shape.diameter2());
