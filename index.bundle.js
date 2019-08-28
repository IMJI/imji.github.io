(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var printHello = require('./modules/module');

console.log(printHello());
console.log('Hi!');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOWU3MzYzN2YuanMiXSwibmFtZXMiOlsicHJpbnRIZWxsbyIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGtCQUFELENBQTFCOztBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBVSxFQUF0QjtBQUNBRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJpbnRIZWxsbyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9tb2R1bGUnKVxyXG5cclxuY29uc29sZS5sb2cocHJpbnRIZWxsbygpKVxyXG5jb25zb2xlLmxvZygnSGkhJykiXX0=
},{"./modules/module":2}],2:[function(require,module,exports){
"use strict";

var printHello = function printHello() {
  return 'Hello!';
};

module.exports = printHello;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyJdLCJuYW1lcyI6WyJwcmludEhlbGxvIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFNBQU8sUUFBUDtBQUNILENBRkQ7O0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsVUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmludEhlbGxvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICdIZWxsbyEnXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcHJpbnRIZWxsbyJdfQ==
},{}]},{},[1])