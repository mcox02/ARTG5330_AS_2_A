//Assignment 2-A Part 2
//Due Feb 12
//This short exercise will introduce you to arrays


//This creates an empty new array
var newArray = [];

for (var i = 0; i <1000; i++) {
	var dataPoint = (Math.random() * 150) + 50;
	newArray.push (dataPoint);
};

//TODO: after you populate the array, find the average of all the values in the array

var arraySum = 0;
newArray.forEach(function(arrayElement){
	//hint: here, we are "looping" through the array, accessing each array element one by one
	//we can add the value to arraySum
	//and finally, we divide arraySum by the total number of array elements
			arraySum = arraySum + arrayElement;
	
arrayAverage = arraySum / newArray.length;

});
console.log(arraySum);
console.log(arrayAverage);

console.log("This data set of " + newArray.length + " items has a sum of " + arraySum + 
		" and an average of " + arrayAverage + ".");