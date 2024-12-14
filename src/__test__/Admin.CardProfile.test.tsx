import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardProfile } from '../components/CardProfile';

describe('CardProfile Component', () => {
    it('renders profile information correctly', () => {
        // Render komponen dengan data props yang diberikan
        render(
            <CardProfile
                username="john_doe"
                email="john@example.com"
                namaOrganizer="Event Organizer"
                no="123-456-7890"
            />
        );

        // Memastikan setiap informasi yang diterima dari props tampil di tabel
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('john_doe')).toBeInTheDocument();

        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();

        expect(screen.getByText('Nama Organizer')).toBeInTheDocument();
        expect(screen.getByText('Event Organizer')).toBeInTheDocument();

        expect(screen.getByText('No-Telephone')).toBeInTheDocument();
        expect(screen.getByText('123-456-7890')).toBeInTheDocument();
    });
});
