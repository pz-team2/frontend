import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Search } from '../components/Search';

describe('Search Component', () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  it('calls the onChange handler when input changes', () => {
    // Mock komponen dengan state untuk menangani perubahan
    const TestComponent = () => {
      const [value, setValue] = useState('');
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        mockOnChange(e);
      };
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mockOnSubmit(e);
      };

      return (
        <Search
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      );
    };

    render(<TestComponent />);

    const input = screen.getByPlaceholderText('Masukkan Username') as HTMLInputElement;

    // Simulasikan perubahan pada input
    fireEvent.change(input, { target: { value: 'new search term' } });

    // Pastikan mockOnChange dipanggil dengan objek event yang sesuai
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    const callArgument = mockOnChange.mock.calls[0][0]; // Argumen pertama yang diterima mock
    expect(callArgument.target.value).toBe('new search term');
  });

  it('calls the onSubmit handler when the form is submitted', () => {
    // Mock komponen dengan state untuk menangani perubahan
    const TestComponent = () => {
      const [value, setValue] = useState('');
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mockOnSubmit(e);
      };

      return (
        <Search
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      );
    };

    render(<TestComponent />);

    const form = screen.getByTestId('search-form');

    // Simulasikan submit form
    fireEvent.submit(form);

    // Pastikan mockOnSubmit dipanggil dengan benar
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
