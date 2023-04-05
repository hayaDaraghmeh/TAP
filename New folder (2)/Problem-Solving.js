
var num_array = [9,6,4,2,3,5,7,0,1],
N = num_array.length;
var missing_num = new Array();

for (var i = 0; i <= N; i++) {
  if (num_array.indexOf(i) == -1) {
    missing_num.push(i);
  }
}
console.log( missing_num);

