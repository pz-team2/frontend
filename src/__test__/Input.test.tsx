import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../components/Fragments/Input';

describe('Input Component', () => {
    it('renders the input with the correct label', () => {
        render(
            <Input
                label="Nama"
                type="text"
                title="Masukkan Nama"
                variant="rounded"
                name="nama"
                value=""
                onChange={() => {}}
            />
        );

        expect(screen.getByText('Nama')).toBeInTheDocument();
    });

    it('renders the input with the correct placeholder', () => {
        render(
            <Input
                label="Nama"
                type="text"
                title="Masukkan Nama"
                variant="rounded"
                name="nama"
                value=""
                onChange={() => {}}
            />
        );

        expect(screen.getByPlaceholderText('Masukkan Nama')).toBeInTheDocument();
    });

    it('calls the onChange handler when typing in the input', () => {
        const handleChange = jest.fn();

        render(
            <Input
                label="Nama"
                type="text"
                title="Masukkan Nama"
                variant="rounded"
                name="nama"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByPlaceholderText('Masukkan Nama');
        fireEvent.change(input, { target: { value: 'John Doe' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('sets the input value correctly', () => {
        render(
            <Input
                label="Nama"
                type="text"
                title="Masukkan Nama"
                variant="rounded"
                name="nama"
                value="John Doe"
                onChange={() => {}}
            />
        );

        const input = screen.getByPlaceholderText('Masukkan Nama');
        expect(input).toHaveValue('John Doe');
    });
});
