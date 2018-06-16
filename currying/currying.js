const sum = (a,b) => a + b;
console.log(sum(1,2));

// takes parameters consecutively
const csum = a => b => a + b;
console.log(csum(1)(2));

console.log(csum(1));

const plusOne = csum(1);
console.log(plusOne(2));

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.map(x => x + 1));

console.log(arr.map(x => plusOne(x)));
const otherPlusOne = x => plusOne(x);
console.log(plusOne(1));
console.log(otherPlusOne(1));

console.log(arr.map(plusOne));
console.log(arr.map(csum(1)));

const isBiggerThan = (threshold, int) => int > threshold;

const cIsBiggerThan = threshold => int => int > threshold;
const moreThanFour = cIsBiggerThan(4);

// console.log(arr.filter(x => x > threshold));
console.log(arr.filter(x => moreThanFour(x)));
console.log(arr.filter(moreThanFour));

const isBiggerThanAgain = int => threshold => int > threshold;
arr.filter(isBiggerThanAgain(4));
