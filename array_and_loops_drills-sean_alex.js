'use strict';  

function max (arr) {
  let i =0;
  let max = Number.NEGATIVE_INFINITY;
  while (i < arr.length) {
    if (arr[i] > max ) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

let test = max([3, 2, 1345362, 54])
console.log(test);

function min (arr) {
  let i =0;
  let min = Number.POSITIVE_INFINITY;
  while (i < arr.length) {
    if (arr[i] < min ) {
      min = arr[i];
    }
    i++;
  }
  return min;
}

let test2 = min([3, 2, 1345362, 54])
console.log(test2);

function average(arr) { 
  let sum = 0; 
 
  arr.forEach((a) => sum += a ); 

  return sum / arr.length; 

}

const arr = [3, 4, 5, 6]; 
const testAvg = average(arr); 
console.log(testAvg); 