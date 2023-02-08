// array all number summation--------------
function getSumNumbers(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    let index = i;
    let element = numbers[index];
    sum = sum + element;
  }
  // console.log(sum)
}
let numbers  = [60, 34, 12, 26, 10];
getSumNumbers(numbers)