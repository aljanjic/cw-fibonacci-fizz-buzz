const fibsFizzBuzz = require('./fibsFizzBuzz');

describe('fibsFizzBuzz', () => {
  it('should return fibsFizzBuzz', () => {
    expect(fibsFizzBuzz(5)).toStrictEqual('fibsFizzBuzz');
  });

  it('should return fibsFizzBuzz', () => {
    expect(fibsFizzBuzz(0)).toStrictEqual('fibsFizzBuzz');
  });

  it('should return fibsFizzBuzz', () => {
    expect(fibsFizzBuzz(1)).toStrictEqual('fibsFizzBuzz');
  });

  it.only('2 should return fibs[ 1, 1 ]', () => {
    expect(fibsFizzBuzz(2)).toStrictEqual([ 1, 1 ]);
  });


  it('should return fibsFizzBuzz', () => {
    expect(fibsFizzBuzz(10)).toStrictEqual('fibsFizzBuzz');
  });
});
