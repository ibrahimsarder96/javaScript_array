// array all number summation--------------
function getSumNumbers(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    sum = sum + element;
  }
  return(sum);
  // console.log(sum)
}
// let numbers  = [60, 34, 12, 26, 10];

// array multielement odd numbers summtion------------
function getOddNumbersAnArray(numbers){
  let oddNumbers = [];
  for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    if(element % 2 === 1){
      oddNumbers.push(element);
    }
  }
  return(oddNumbers);
}
let numbers  = [60, 34, 12, 13, 26, 10, 11];

let oddNumber = getOddNumbersAnArray(numbers);
let oddNumberSum = getSumNumbers(oddNumber);
console.log('Odd Number Sum:', oddNumberSum);