
var stuff = [];

var start = Date.now();

for (var i=0; i < 1000; i++) {
  for (var j=0; j < 1000; j++) {
    // console.log(i * 1000 + j);
    stuff.push(i * 1000 + j);
    // stuff.pop();
  }
}

var end = Date.now();

console.log(end - start);
