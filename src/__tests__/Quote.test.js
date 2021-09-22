import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quote', () => {
  test('Quote renders correctly', () => {
    render(<Quote />);
    expect(screen).toMatchSnapshot();
  });
});
