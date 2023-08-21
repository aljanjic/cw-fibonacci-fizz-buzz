const fibsFizzBuzz = require('./fibsFizzBuzz');

describe('fibsFizzBuzz', () => {
  it('5 should return [1,1,2,"Fizz","Buzz"]', () => {
    expect(fibsFizzBuzz(5)).toStrictEqual([1,1,2,"Fizz","Buzz"]);
  });

  it('0 should return  []', () => {
    expect(fibsFizzBuzz(0)).toStrictEqual([]);
  });

  it('1 should return  [1]', () => {
    expect(fibsFizzBuzz(1)).toStrictEqual([1]);
  });

  it('2 should return [ 1, 1 ]', () => {
    expect(fibsFizzBuzz(2)).toStrictEqual([ 1, 1 ]);
  });


  it('10 should return [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz"]', () => {
    expect(fibsFizzBuzz(10)).toStrictEqual([1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz"]);
  });
});
