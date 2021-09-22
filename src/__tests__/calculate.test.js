import calculate from '../logic/calculate';

describe('calculate logic tests', () => {
  const obj = {
    total: '3',
    next: '2',
    operation: '+',
  };

  const subtractObj = {
    total: '3',
    next: '2',
    operation: '-',
  };

  const multiplyObj = {
    total: '3',
    next: null,
    operation: '-',
  };

  test('3 + 2 = 5', () => {
    expect(calculate(obj, '=')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  test('Reset objec with AC', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('3 - 2 = 1', () => {
    expect(calculate(subtractObj, '=')).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });

  test('update operator', () => {
    expect(calculate(multiplyObj, '+')).toEqual({
      total: '3',
      next: null,
      operation: '+',
    });
  });
});
