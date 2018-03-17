
var stuff = [];
var times = [];
var numTests = 300;

function testTime() {
  var start = Date.now();

  for (var i=0; i < 1000; i++) {
    for (var j=0; j < 1000; j++) {
      stuff.push(i * 1000 + j);
    }
  }

  var end = Date.now();
  stuff = [];
  times.push(end - start);
}

for (var i=0; i < numTests; i++) {
  testTime();
}

var tot = times.reduce(function(total, num) {
  return total + num;
});

var avg = tot / numTests;

console.log(avg);
