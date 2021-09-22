import calculate from "../logic/calculate";

describe('calculate logic tests', () => {
  const obj = {
    total: '3',
    next: '2',
    operation: '+',
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
});