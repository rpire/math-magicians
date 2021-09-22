import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home', () => {
  test('Home renders correctly', () => {
    render(<Home />);
    expect(screen).toMatchSnapshot();
  });
});
