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
		while (arr[j-1] > v && j > 0) {
			//swap
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
//2 parts
	// merging - joins two files to make one file
	// selection - splits an array into two lists
//this algo used for sorting linked list

	//mergeSort takes takes the array, first index, and last index
function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid));
    var subRight = mergeSort(arr.slice(mid));
    
    return merge(subLeft, subRight);
}


function merge(arr1, arr2) {
	var result = [];
	var left_i = 0;
	var right_i = 0;

	while (left_i < arr1.length && right_i < arr2.length) {
		if (arr1[left_i] < arr2[right_i]) {
			result.push(arr1[left_i++]);
		} else {
			result.push(arr2[right_i++]);
		}
	}

	//used when the two arrays are not the same length
	while (left_i < arr1.length) {
		result.push(arr1[left_i++]);
	}

	while (right_i < arr2.length) {
		result.push(arr2[right_i++]);
	}
	return result
}

//---- Quick Sort
function swap(arr, i_1, i_2) {
	var temp = arr[i_2];
	arr[i_2] = arr[i_1];
	arr[i_1] = temp;
}


function quickSort(arr, start, end) {
	if ( start < end ) {
		pIndex = partition(arr, start, end);
		quickSort(arr, start, pIndex-1);
		quickSort(arr, pIndex+1, end);
	}
	return arr
}

function partition(arr, start, end) {
	var pivot = arr[end];
	var pIndex = start;

	for (var i = start; i < end; i ++) {
		if (arr[i] <= pivot) {
			//swap arr[i] with arr[pIndex]
			swap(arr, i, pIndex);
			pIndex++;
		}
	}
	//swap pivot with pIndex
	swap(arr, end, pIndex);
	return pIndex
}

console.log(quickSort(arr1, 0, arr1.length-1));
console.log(quickSort(arr2, 0, arr2.length-1));
console.log(quickSort(arr3, 0, arr3.length-1));
console.log(quickSort(arr4, 0, arr4.length-1));





