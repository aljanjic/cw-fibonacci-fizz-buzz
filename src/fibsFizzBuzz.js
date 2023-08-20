function fibsFizzBuzz(num) {

// Create fibonacci sequence array

let fibonacciArr = [];

console.log('fibonacciArr length: ', fibonacciArr.length)

// 1, 1, 2, 3, 5, 8, 13

if ( num === 0 ) fibonacciArr = [];
if ( num === 1) fibonacciArr = [1]
if (num === 2) fibonacciArr = [1, 1]

if (num > 2){
  fibonacciArr = [1, 2]
  console.log('fibonacciArr length: ', fibonacciArr.length)

  for (let i = fibonacciArr.length; i < num; i++){
    fibonacciArr.push(fibonacciArr[i - 2] + fibonacciArr[i-1])
  }
}


console.log('fibonacciArr: ', fibonacciArr)


// Replace numbers in the sequence


let result = fibonacciArr.map((number) => {
  if (number % 5 === 0 && number % 3 === 0 ) return 'FizzBuzz';
  if (number % 5 === 0 ) return 'Buzz';
  if (number % 3 === 0 ) return 'Fizz';
  return number;
})

console.log('Result: ', result)

  return result;
}

module.exports = fibsFizzBuzz;
