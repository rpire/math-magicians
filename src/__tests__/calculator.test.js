import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator';



describe('Calculator', () => {
  const data = {
    total: '0',
    next: null,
    operation: null,
  };

  const changeHandle = () => data; 

  test('Calculator renders correctly', () => {
    render(<Calculator data={data} onDataChange={changeHandle} />);
    expect(screen).toMatchSnapshot();
  });
});