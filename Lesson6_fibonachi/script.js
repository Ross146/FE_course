var compare = function(a,b) {
	var result = {};
	var length = function () {
		a.length == b.length ? result.result = true : result.result = false	;	 
		}
	var bigger_sum = function () {
		var sum_arr = function (arr) {
			return sum = arr.reduce(function(sum, current) {
  			return sum + current;
				}, 0);
		}
		var compareNumeric = function (a, b) {
  		if (a > b) return -1;
  		if (a < b) return 1;
		}
		if(sum_arr(a) > sum_arr(b)) {
			result.bigger = a.sort(compareNumeric);
		} else if (sum_arr(b) > sum_arr(a)){
			result.bigger = b.sort(compareNumeric);
		} else {
			result.bigger = [];
		}		
	}
	length();
	bigger_sum();
	return result;
}
console.log(compare([7,2], [7,2]));
console.log(compare([3,1,4], [8]));
console.log(compare([3,1,4], [8,2]));

var row_fib = function (n) {
	var arr = [1,1];		
	var calc_row = function () {
		var fib = function (a) {
			return a <= 1 ? a : fib(a - 1) + fib(a - 2);
		}
		for(var i = 3; i<=n; i++) {
			arr.push(fib(i))
		}
		return arr;
	}	
	return calc_row();
}
console.log(row_fib(8));

