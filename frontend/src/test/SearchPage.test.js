import { screen, render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SearchPage } from './SearchPage';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../hooks/useFetch', () => ({
    useFetch: jest.fn(),
}));

describe('Search Page test', () => {
    test('Must disabled next button on last page', async () => {
        const responseData = [
            {
                "id": 1,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 2,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 3,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 4,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 5,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 6,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 7,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 8,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            },
            {
                "id": 9,
                "name": "",
                "price": "",
                "description": "",
                "image_url": "",
                "total": 11
            }
        ];

        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(responseData),
        });

        await act(async () => {
            render(
                <BrowserRouter>
                    <SearchPage />
                </BrowserRouter>)
        });

        // Wait for the data to be fetched and rendered
        await screen.findByTestId(/^item_.*$/);

        // Query the last page button by its text
        const lastPageButton = screen.getByTestId('last-page');
        const nextPageButton = screen.getByTestId('next-page');

        // Simulate clicking on the last page button
        fireEvent.click(lastPageButton);

        // Assert that the last page button is disabled
        expect(lastPageButton).toBeDisabled();
        expect(nextPageButton).toBeDisabled();
    });
});