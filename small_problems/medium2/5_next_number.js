// Next Featured Number Higher than a Given Value

// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// My notes:
// input: integer
// output: integer
// summary: counting up from input find the next number that satisfies the rules
// rules:
// - divisible by 7
// - odd
// - each digit is represented only once in number = digit rule
// - highest possible number is 9876543201
// - if there is no number that satisfies rules, return an error message
// algo:
// - helper method: digit rule
//   - convert num to string
//   - loop through chars of string and build a new string
//   - for curr char, check if new string already contains it
//   - if so, break out of loop and return false
// - counting up by 1 from input, find the next number that is div by 7 and odd
// - if that number satisfies digit rule, return number
// - else:
//   - counting up by 14 (finding the next number div by 7 and odd) and ending
//     at 9876543201:
//     - if current number satisfies digit rule, return number
// - return error message

function hasUniqueDigits(num) {
  let strNum = String(num);
  let newStr = '';

  for (let ind = 0; ind < strNum.length; ind += 1) {
    if (newStr.includes(strNum[ind])) {
      return false;
    } else {
      newStr += strNum[ind];
    }
  }

  return true;
}

const MAX_NUM = 9876543201;

// conserving resources by counting by 14 as much as possible:
// function featured(num) {
//   let firstNum = NaN;

//   for (let currNum = num + 1; currNum <= MAX_NUM; currNum += 1) {
//     if (currNum % 7 === 0 && currNum % 2 === 1) {
//       firstNum = currNum;
//       break;
//     }
//   }

//   if (hasUniqueDigits(firstNum)) {
//     return firstNum;
//   }

//   for (let featuredNum = firstNum + 14; featuredNum <= MAX_NUM; featuredNum += 14) {
//     if (hasUniqueDigits(featuredNum)) {
//       return featuredNum;
//     }
//   }

//   return 'There is no possible number that fulfills those requirements.';
// }

// without counting by 14s:

function featured(num) {
  for (let currNum = num + 1; currNum <= MAX_NUM; currNum += 1) {
    if (currNum % 7 === 0 && currNum % 2 === 1 && hasUniqueDigits(currNum)) {
      return currNum;
    }
  }

  return 'There is no possible number that fulfills those requirements.';
}


// Examples:

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
