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
			arr.push(pair[s[i]]);
		} else if (s[i] == ")" || s[i] =="}" || s[i] == "]") {
			if (arr[arr.length-1] != s[i]) {
				valid = false;
				return;
			} else {
				arr.pop();
			}
		}
	}
	if (arr.length != 0) valid = false;
	return valid
}

vpara1 = "{{{}";
vpara2 = "{}";
vpara3 = "(({}))[]";


// function validParentheses(s) {
// 	if (s.length == 0) return true;

// 	var valid = true, currChar,
// 	pair = {
// 		"(" : ")",
// 		"{" : "}",
// 		"[" : "]"
// 	},
// 	arr = [];

// 	for (var i=0; i < s.length; i++) {
// 		if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
// 			arr.unshift(pair[s[i]]);
// 			console.log(arr);
// 		} else if (s[i] == ")" || s[i] =="}" || s[i] == "]") {
// 			if (arr[0] != s[i]) {
// 				valid = false;
// 				break;
// 			} else {
// 				arr.splice(0,1);
// 				console.log(arr);
// 			}
// 		}
// 	}
// 	if (arr.length != 0) valid = false;
// 	return valid
// }

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

//determine if number is prime
//3
function prime(n) {
	if (n <= 2 ) return false;
	if (n == 3 ) return true; 
	for (var i = 2 ; i <= n/2; i++) {
		if (n % i == 0) {
			return false
		}
	}
	return true
}

var countPrimes = function(n) {
    var count = 0;
    for (var i = n; i >=2; i-- ) {
        if (prime(i)) {
            count++;
        }
    }
    return count
};

//valid palindrome
//Given a string, determine if it is a palindrome,
//considering only alphanumeric characters and ignoring cases.
function isPalindrome(s) {
	var str = s.replace(/\W/g,"").toLowerCase();
	return str == str.split("").reverse().join("")
}

//assume case does not matter. white space ignored. and non-letter characters ignored
function anagram(s1, s2) {
	s1 = s1.replace(/\W/g,'').toLowerCase();
	s2 = s2.replace(/\W/g,'').toLowerCase();
	//does not remove numbers
	console.log(s1);
	if (s1.length != s2.length) return false;
	return s1.split('').sort().join('') == s2.split('').sort().join('');
}

function minK(arr) {
	var k2 = 0, last = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] + k2 <= last) {
			last++;
			k2 = last - arr[i];
		} else {
			last = arr[i]
		}
	}
	k = Math.ceil(k2/2);
	console.log(k);
	return k = Math.ceil(k2/2);
}

//var minkTest = [10,2,20];
//minK(minkTest);

//array of number. find the subarray of a given length that has the biggest max-min difference.

//O(2n) 
//---- slicing is 
function subMaxMin(arr, size) {
	if (size > arr.length || arr.length == 0) return false;
	if (arr.length == 1) return arr[0];
	var limit = size;
	var bin = [], bin_diff, max_diff = 0;
	for (var i = 0; i < arr.length-size+1; i++) {
		bin = arr.slice(i,limit);
		min = Math.min.apply(null,bin);
		max = Math.max.apply(null,bin);
		limit++;
		bin_diff = Math.abs(max-min);
		if (bin_diff > max_diff) {
			max_diff = bin_diff;
		}
	}
	return max_diff
}

function find_deviation(v, d) {
    var maxDifferenceGlobal = 0;
    var len = v.length - d + 1;
    for(var i = 0; i < len; ++i) {
        var min, max;
        if (v[i] <= v[i + 1]) {
            min = v[i]; max = v[i + 1];
        } else {
            max = v[i]; min = v[i + 1];
        }
        for(var j = i + 2; j < i + d; ++j) {
            if (min > v[j]) { min = v[j]; }
            if (max < v[j]) { max = v[j]; }
        }
        var maxDifferenceLocal = Math.abs(max - min);
        if(maxDifferenceLocal > maxDifferenceGlobal) {
            maxDifferenceGlobal = maxDifferenceLocal;
        }
    }
    console.log(maxDifferenceGlobal);
}


//[-10,3,4] with size = 2 --> [-10, 3] and [3,4] max difference is 13

var subtest1 = [0], subtest2 = [0,1], subtest = [-10,3,4,1000]




