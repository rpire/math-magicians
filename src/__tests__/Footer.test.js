import React from 'react';
import {render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('Renders Footer component', () => {
    render(<Footer />);
    expect(screen).toMatchSnapshot();
  });
});