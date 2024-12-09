import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardEvent } from '../components/Layout/CardEvent';

jest.mock('../components/Fragments/Button', () => ({
    Button: ({ children, to, variant, onClick }: any) => (
        <button data-testid={to || 'button'} className={variant} onClick={onClick}>
            {children}
        </button>
    ),
}));

describe('CardEvent Component', () => {
    const mockOnClick = jest.fn();

    it('renders the card with the correct title, image, and date', () => {
        render(
            <CardEvent
                gambar="https://via.placeholder.com/150"
                title="Event Title"
                date="12 December 2024"
                id="123"
                onclick={mockOnClick}
            />
        );

        // Memastikan gambar ditampilkan
        const img = screen.getByAltText('Event');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'https://via.placeholder.com/150');

        // Memastikan judul ditampilkan
        expect(screen.getByText('Event Title')).toBeInTheDocument();

        // Memastikan tanggal ditampilkan
        expect(screen.getByText('12 December 2024')).toBeInTheDocument();
    });

    it('renders the buttons with the correct links', () => {
        render(
            <CardEvent
                gambar="https://via.placeholder.com/150"
                title="Event Title"
                date="12 December 2024"
                id="123"
                onclick={mockOnClick}
            />
        );

        // Memastikan tombol edit ada
        expect(screen.getByTestId('/admin/organizer/event/update/123')).toBeInTheDocument();

        // Memastikan tombol delete ada
        expect(screen.getByTestId('delete-button')).toBeInTheDocument();  // Memperbaiki data-testid

        // Memastikan tombol detail ada
        expect(screen.getByTestId('/admin/organizer/event/detail/123')).toBeInTheDocument();
    });

    it('calls the onClick handler when delete button is clicked', () => {
        render(
            <CardEvent
                gambar="https://via.placeholder.com/150"
                title="Event Title"
                date="12 December 2024"
                id="123"
                onclick={mockOnClick}
            />
        );
    
        // Klik tombol delete
        const deleteButton = screen.getByTestId('delete-button');  // Memperbaiki data-testid
        fireEvent.click(deleteButton);
    
        // Memastikan mockOnClick dipanggil sekali
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
