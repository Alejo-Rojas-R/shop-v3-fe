import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { SearchInput } from '../components/layout/SearchInput';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Search Input', () => {
    let inputElement;
    let buttonElement;
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SearchInput />
            </BrowserRouter>
        );
        inputElement = screen.getByPlaceholderText('Search');
        buttonElement = screen.getByRole('button');
    })

    test('Must display a placeholder text', () => {
        expect(inputElement).toBeInTheDocument();
    });

    test('Must display a button', () => {
        expect(buttonElement).toBeInTheDocument();
    });

    test('Must change color', () => {
        fireEvent.mouseOver(buttonElement);
        expect(buttonElement).toHaveStyle({
            backgroundColor: 'var(--bs-btn-hover-bg)'
        });
    });

    test('There should be less than 9 cards after click search, meaning there are results for the search', () => {
        // Simulate writing in the input field
        userEvent.type(inputElement, 'ASUS');
        expect(inputElement.value).toBe('ASUS');

        // Simulate clicking the button
        fireEvent.click(buttonElement);

        const itemCards = screen.queryAllByTestId(/^item_.*$/);
        expect(itemCards.length).toBeLessThan(9);
    });
});