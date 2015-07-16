//Given an integer, write a function to determine if it is a power of two.
var isPowerOfTwo = function(n) {
    if ( n == 1 ) return true;
    if ( n == 0 ) return false;

    while ( n % 2 == 0 && n > 1 ) {
        n = n/2;
        if ( n == 1 ) {
            return true
        }
    }
    return false
};

//Reverse integer
//Example1: x = 123, return 321
//Example2: x = -123, return -321

function reverseInt(int) {
	try {
		//handle negitive number
		var flag = false;
		if (int < 0) {
			flag = true;
			int = 0 - int;
		}
		var res = 0; p = int;
		while (p > 0) {
			mod = p % 10;
			p = parseInt( p / 10 );
			res = res * 10 + mod;
		}
		if (flag) {
			res = 0 - res;
		}
		//bound by 32 bit int prevent overflow
		if (res > 2147483647 || res < -2147483647  ) {
			return 0
		}
		return res
	} catch(err) {
		//handle any other cases
		return 0
	}
}

function validParentheses(s) {
	if (s.length == 0) return true;

	var valid = true, currChar,
	pair = {
		"(" : ")",
		"{" : "}",
		"[" : "]"
	},
	arr = [];

	for (var i=0; i < s.length; i++) {
		if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
			arr.unshift(pair[s[i]]);
			console.log(arr);
		} else if (s[i] == ")" || s[i] =="}" || s[i] == "]") {
			if (arr[0] != s[i]) {
				valid = false;
				break;
			} else {
				arr.splice(0,1);
				console.log(arr);
			}
		}
	}
	if (arr.length != 0) valid = false;
	return valid
}

//Contains Duplicate 
//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, 
//and it should return false if every element is distinct.

// ------ slow as hell
// function containsDuplicates(arr) {
// 	var flag = false;
// 	for (var i = 0; i < arr.length; i ++) {
// 		for (var j = 0; j< arr.length; j++) {
// 			if (arr[i] == arr[j] && i != j) {
// 				flag = true;
// 			}
// 		}
// 	}
// 	return flag
// }

function containsDuplicates(arr) {
	var hash = {}, flag = false;
	for (var i = 0; i < arr.length; i++) {
		if (!hash.hasOwnProperty(arr[i])) {
			hash[arr[i]] = true
		} else {
			flag = true;
		}
	}
	return flag
}

//Count the number of prime numbers less than a non-negative number, n.









