import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FaUser } from 'react-icons/fa';
import Card from '../components/Layout/Card';

describe('Card Component', () => {
    it('renders the correct title and jumlah', () => {
        render(
            <Card 
                title="Jumlah Pengguna" 
                jumlah="1200" 
                icons={<FaUser />} 
            />
        );

        // Memastikan judul ditampilkan
        expect(screen.getByText('Jumlah Pengguna')).toBeInTheDocument();
        // Memastikan jumlah ditampilkan
        expect(screen.getByText('1200')).toBeInTheDocument();
    });

    it('renders the correct icon', () => {
        render(
            <Card 
                title="Jumlah Pengguna" 
                jumlah="1200" 
                icons={<FaUser data-testid="user-icon" />} 
            />
        );

        // Memastikan ikon ditampilkan
        const icon = screen.getByTestId('user-icon');
        expect(icon).toBeInTheDocument();
    });

    it('applies the correct classes for styling', () => {
        render(
            <Card 
                title="Jumlah Pengguna" 
                jumlah="1200" 
                icons={<FaUser />} 
            />
        );

        const cardElement = screen.getByText('Jumlah Pengguna').closest('.card');
        expect(cardElement).toHaveClass('card bg-custom-secondary text-white w-full shadow-md');
    });
});
