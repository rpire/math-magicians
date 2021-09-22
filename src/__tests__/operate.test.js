import operate from '../logic/operate';

describe('Sum', () => {
  test('1 + 1 = 2', () => {
    expect(operate('1', '1', '+')).toBe('2');
  });

  test('Sum with zero', () => {
    expect(operate('543', '0', '+')).toBe('543');
  })
});
