function fibsFizzBuzz(num) {

// Create fibonacci sequence array

let fibonacciArr = [];
if ( num === 0 ) fibonacciArr = [];
if ( num === 1) fibonacciArr = [1]
if (num >= 2)  fibonacciArr = [1, 1]


for (let i = fibonacciArr.length; i < num; i++){
  fibonacciArr.push(fibonacciArr[i - 2] + fibonacciArr[i-1])
}


// Replace numbers in the sequence
let result = fibonacciArr.map((number) => {
  if (number % 5 === 0 && number % 3 === 0 ) return 'FizzBuzz';
  if (number % 5 === 0 ) return 'Buzz';
  if (number % 3 === 0 ) return 'Fizz';
  return number;
})

  return result;


  // let res = [], [a, b] = [0, 1];

  // for (let i = 0; i < num; i++) {
  //   [a, b] = [b, a + b];
  
  //   res.push(a % 15 == 0 ? 'FizzBuzz' :
  //     a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a);
  // }
  // return res;
}

module.exports = fibsFizzBuzz;
