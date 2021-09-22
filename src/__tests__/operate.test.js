import operate from '../logic/operate';

describe('Plus', () => {
  test('Adding one plus one', () => {
    expect(operate('1', '1', '+')).toBe('2');
  });

  test('Adding zero', () => {
    expect(operate('543', '0', '+')).toBe('543');
  });

  test('Adding a negative number', () => {
    expect(operate('17', '-5', '+')).toBe('12');
  });
});

describe('Minus', () => {
  test('Subtracting five from 7', () => {
    expect(operate('7', '5', '-')).toBe('2');
  });

  test('Subtracting 7 from five', () => {
    expect(operate('5', '7', '-')).toBe('-2');
  })

  test('Subtracting two negative numbers', () => {
    expect(operate('-17', '-30', '-')).toBe('13');
  })
})