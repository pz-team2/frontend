import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardVerify } from '../components/CardVerify';

describe('CardVerify Component', () => {
  test('renders correctly with given props', () => {
    const mockJudul = <span>Judul Test</span>;
    const mockIcons = <span>★</span>; 
    const mockText = 'This is a test text';
    const mockChildren = <button>Click Me</button>;

    render(
      <CardVerify judul={mockJudul} icons={mockIcons} text={mockText}>
        {mockChildren}
      </CardVerify>
    );


    expect(screen.getByText('Judul Test')).toBeInTheDocument();
    expect(screen.getByText('★')).toBeInTheDocument();
    expect(screen.getByText('This is a test text')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('has correct class names for styling', () => {
    // Arrange
    const mockJudul = <span>Judul Styling Test</span>;

    // Act
    const { container } = render(
      <CardVerify judul={mockJudul} icons={null} text="" children={null} />
    );

    // Assert
    const cardDiv = container.querySelector('.card');
    expect(cardDiv).toHaveClass('shadow-lg', 'bg-slate-100', 'w-96', 'h-96', 'p-5');
  });

  test('renders without crashing when optional props are not provided', () => {
    render(
      <CardVerify judul={<span>Minimal Test</span>} icons={null} text="" children={null} />
    );

    expect(screen.getByText('Minimal Test')).toBeInTheDocument();
  });
});
