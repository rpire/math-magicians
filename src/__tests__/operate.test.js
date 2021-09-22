import operate from '../logic/operate';

describe('Sum', () => {
  test('1 + 1 = 2', () => {
    expect(operate('1', '1', '+')).toBe('2');
  });

  test('Sum with zero', () => {
    expect(operate('543', '0', '+')).toBe('543');
  })
});

describe('Multiply', () => {
  test('5 × 3 = 15', () => {
    expect(operate('5','3','×')).toBe('15');
  });
  test('5 × 0 = 0', () => {
    expect(operate('5','0','×')).toBe('0');
  });
});

describe('Divide', () => {
  test('15 ÷ 3 = 5', () => {
    expect(operate('15','3','÷')).toBe('5');
  });
  test('5 ÷ 0 = 0', () => {
    expect(operate('5','0','÷')).toBe('Can\'t divide by 0.');
  });
});

describe('Modulus', () => {
  test('15 % 3 = 0', () => {
    expect(operate('15','3','%')).toBe('0');
  });
  test('5 % 0 = 0', () => {
    expect(operate('5','0','%')).toBe('Can\'t divide by 0.');
  });
});


