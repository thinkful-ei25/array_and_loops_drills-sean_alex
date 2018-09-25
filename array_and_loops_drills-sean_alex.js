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

function fizzBuzz(countTo) {
 return new Array(countTo).fill(1).map((value, index) => index + 1).map(value => { 
  if (value % 3 === 0 && value % 5 ===0) {
    return 'fizzbuzz';
  } else if (value % 5 === 0) {
    return 'buzz';
  } else if (value % 3 === 0) {
    return 'fizz';
  } else {
    return value;
  }
  });
}

const fizzTest = fizzBuzz(15);
console.log(fizzTest);

const hello = function hello(){ 
  console.log('hi'); 
}; 

const bye = function bye(){ 
  console.log('bye'); 
} 

function repeat(fn, n){ 
  for(let i = 0; i < n; i++){ 
    fn(); 
  }
}

repeat(bye, 5); 

function filter(arr, fn) {
  
  // refactored solution
  const newArray = [];
  arr.forEach( name => (fn(name) === true) ? newArray.push(name) : null);
  return newArray;

 // initial solution
 // const newArray = [];
  // for(let i = 0; i < arr.length; i++) {
 //   if (fn(arr[i]) === true) {
 //     newArray.push(arr[i]);
 //   }
 // }
 // return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){ 
  let warningCounter = 0; 

  return function(location){ 
    warningCounter++; 
    console.log(`DANGER!There is a ${typeOfWarning} hazard at ${location}!"`); 
    let time = (warningCounter > 1) ? 'times' : 'time'; 
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`); 
  }
}

const RockWarning = hazardWarningCreator('rocks');
RockWarning('cali'); 
RockWarning('rock concert'); 
RockWarning('rock out'); 

const SnowWarning = hazardWarningCreator('snow');
SnowWarning('brrrrrr'); 
SnowWarning('freezer'); 
hazardWarningCreator('fire')('middle earth');  
