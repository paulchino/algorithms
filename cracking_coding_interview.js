//---- Chapter 1 Arrays and Strings

var chap_1 = (function() {
	return {
		//---- 1.1
		// Determine if a string has all unique characters. What if you cannot use 
		// Additional data structures
		uniqueCharacters: function(s) {
			var flag = true, hash = {};
			for (var i = 0 ; i < s.length; i++) {
				if (!hash.hasOwnProperty(s[i])) {
					hash[s[i]] = true
				} else {
					flag = false
				}
			}
			return flag
		},

		//---- 1.3 Given two strings, write a method to decide if one is a permutation 
		// the other
		//--- Ask if it is case sensitive and if white space matters?
		permutation: function(s1,s2) {
			if (s1.length != s2.length) return false;

			s1 = s1.replace(/ /g,'').toLowerCase();
			s2 = s2.replace(/ /g,'').toLowerCase();
			return s1.split("").sort().join("") == s2.split("").sort().join("");	
		},

		//---- 1.4 Replace all spaces with %20. End white spaces do not count
		white_spaces: function(s) {
			return s.trim().replace(/ /g,'%20');
		},

		//----- 1.5 aabcccccaa would become a2b1c5a2
		// if compress does not reduce space just return the origial string
		compress: function(s) {
			var mystr = '', lastChar = s[0], count = 1;
			for (var i = 1; i < s.length; i++ ) {
				if (s[i] == lastChar) {
					count++;
				} else {
					mystr += lastChar + count;
					count = 1;
					lastChar = s[i];
				}
			}
			return mystr + lastChar + count
		},

		//temp = top[i]
		//top[i] = left[i]
		//left[i] = bottom[i]
		//bottom[i] = right[i]
		//right[i] = temp



		rotate: function(arr) {
			var depth = arr.length, first, last;
			var layer = Math.floor(arr.length/2);
			for (var j = 0; i < layer; j++) {
				first = j;
				last = arr.length - 1 - j;

				for (var i = 0 ; i < last; i ++) {
					//
				}
			}

		}


	}
})();







