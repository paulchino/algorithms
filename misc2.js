//interview type questions

// ------ Question 1
	// I have an array stock_prices_yesterday where:

	// The indices are the time in minutes past trade opening time, which was 9:30am local time.
	// The values are the price in dollars of Apple stock at that time.
	// For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.

	// Write an efficient algorithm for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

	// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

var max_stock1 = [100, 98, 120, 200, 205];
var max_stock2 = [1,0,-2,-5];

function max_profit(arr) {
    if (arr.length < 2) {
        return ('error must have at least 2');
    }
    var min_price = arr[0], max_profit = arr[1] - arr[0], potential_profit;
    for (var i = 1; i < arr.length; i ++) {
        potential_profit = arr[i] - min_price;
        if (max_profit < potential_profit) {
            max_profit = potential_profit;
        }         
        if (min_price > arr[i]) {
            //update the min price
            min_price = arr[i];
        }
 
    }
    console.log(max_profit);
}
max_profit(max_stock1);
max_profit(max_stock2);

//-------- Question 2 
	// You have an array of integers, and for each index you want to find 
	//the product of every integer except the integer at that index.
	//input [1,7,3,4] output [84,12,28,21]

var product_arry = [1,7,3,4];

function misc_2(arr) {
	var before_i = Array(arr.length).join(1).split(''), product = 1;
	for (var i = 0; i < arr.length; i ++) {
		before_i[i] = product;
		product = product * arr[i];
	}
	console.log(before_i);
	var after_i = Array(arr.length).join(1).split(''), product = 1;
	for (var j = arr.length-1; j >= 0; j--) {
		after_i[j] = product;
		product = product * arr[j];
	}
	console.log(after_i);

	var final = [];
	for (var k = 0; k < arr.length; k++) {
		final[k] = before_i[k] * after_i[k];
	}
	console.log(final);
}

//misc_2(product_arry);

//--------- Question 3
	// Given an array_of_ints, find the highest_product you 
	// can get from three of the integers.
	// example [-10, -8, 0, 2] -> 160
function product_of_three(arr) {
	if (arr.length < 3) return false;

	// need to keep track if these
	// highest_product_of_three
	// highest_product_of_2
	// highest
	// lowest_product_of_2
	// lowest

	var highest, lowest;

	if ( arr[0] <= arr[1] ) {
		lowest = arr[0];
		highest = arr[1];
	} else {
		highest = arr[0];
		lowest = arr[1];
	}

	highest_product_of_2 = arr[0] * arr[1];
	lowest_product_of_2 = arr[0] * arr[1];

	highest_product_of_three = arr[0] * arr[1] * arr[2];

	for (var i = 2; i < arr.length; i ++) {
		highest_product_of_three = Math.max(highest_product_of_three,
			arr[i] * highest_product_of_2, arr[i] * lowest_product_of_2);

		//new highest of two
		highest_product_of_2 = Math.max(highest_product_of_2, 
			arr[i] * highest, arr[i] * lowest);

		//new lowest of two
		lowest_product_of_2 = Math.min(lowest_product_of_2,
			arr[i] * highest, arr[i] * lowest);

		//new highest
		highest = Math.max(highest, arr[i]);

		//new lowest
		lowest = Math.min(lowest, arr[i]);
	}
	console.log(highest_product_of_three);
}

var three_arr = [-10, -8, 0, 2]
//product_of_three(three_arr);



//---------- Question 16
// Cake thief



// --------- Question 35
// Write a function for doing an in-place shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original 
// array must have the same probability of ending up in each spot 
// in the final array.

// Assume that you have a function get_random(floor, ceiling) 
// for getting a random integer that is >=floor and <=ceiling.

function shuffle(arr) {
	var counter = arr.length, temp, index;

	while ( counter > 0 ) {
		//select a random index;
		index = Math.floor(Math.random() * counter);
		counter--;

		temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}
	console.log(arr);
	return arr;
}

var myArray = ['1','2','3','4','5','6','7','8','9'];
shuffle(myArray);


