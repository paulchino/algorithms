//************ SORING ALGORITHMS

//------------ test cases
var arr1 = [0];
var arr2 = [0,1,2];
var arr3 = [-3,2,122,100];
var arr4 = [3,0,-3.2,-100];


//------------ BUBBLE SORT 

// worst case O(n^2)
// best case O(n)
function bubble(arr) {
	for (var i = 0; i < arr.length; i++) {
		var flag = true;
		for (var j = 0; j < arr.length - i - 1; j++ ) {
			if (arr[j] > arr[j+1]) {
				// swap
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
				flag = false;
			}
		}
		if (flag) {
			return arr
		}
	}
	return arr
}


//----------- SELECTION SORT
//advantages 
	//in-place sort (requires no additional storage space)

//worst case O(n^2)
//best case O(n)

function selection(arr) {
	var min, temp;

	for (var i = 0; i < arr.length-1; i++) {
		min = i;
		for(var j = i; j < arr.length; j++) {
			//find the index of the min value
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		//swap
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr
}


//----------- INSERTION SORT
//generally more efficent than selection and bubble
function insertion(arr) {
	var j, v;
	for (var i = 1; i < arr.length; i++) {
		v = arr[i];
		j = i;
		while(arr[j-1] > v && j>0) {
			arr[j] = arr[j-1];
			j--;
		}
		arr[j] = v;
	}
	return arr
}

//---------- SHELL SORT
//fastest of all O(n^2) sorting algos
//gap (h) large enough, but not larger than the array size
//when h=1 its the same a insertion sort

function shell(arr) {
	var temp, i, j;

	//assume initial gap that is half length
	var gap = Math.floor(arr.length/2);
	while (gap > 0) {
		for(i = gap; i < arr.length; i++) {
			temp = arr[i];
			for (j = i; j >= gap && arr[j-gap] > temp; j-= gap ) {
				//swap
				arr[j] = arr[j-gap];
			}
			arr[j] = temp;
		}
		gap = Math.floor(gap/2);
	}
	return arr
}

//using while loop, similar to insertion
function shell1(arr) {
	var temp, i, j;
	//assume initial gap that is half length
	var gap = Math.floor(arr.length/2);
	while (gap > 0) {
		for(i = gap; i < arr.length; i++) {
			temp = arr[i];
			j = i;
			while(j >= gap && arr[j-gap] > temp) {
				//swap
				arr[j] = arr[j - gap];
				j--;
			}
			arr[j] = temp;
		}
		gap = Math.floor(gap/2);
	}
	return arr
}


//----------- MERGE SORT







