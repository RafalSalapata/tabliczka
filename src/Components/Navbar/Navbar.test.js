import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import Navbar from '.';
import { AppContextProvider } from '../../Helpers/Context';

describe("Navbar tests", () => {

    test('hamburger', () => {
        render(
            <AppContextProvider>
                <Navbar />
            </AppContextProvider>
        )
        const hamburger = screen.getByTitle('hamburger')
        //const hamburger = screen.getByRole('')
        expect(hamburger).toBeVisible()
    })

    test('should render theme toggle', () => {
        render(
            <AppContextProvider>
                <Navbar />
            </AppContextProvider>
        )
        const themeToggle = screen.getByTestId('theme-toggle-label')
        expect(themeToggle).toBeInTheDocument()
    })

    // test('should have white background', () => {
    //     render(
    //         <AppContextProvider>
    //             <Navbar />
    //         </AppContextProvider>
    //     )
    //     const logo = screen.getByText('Nauka Liczenia')
    //     expect(logo).toHaveStyle("color: #f1356d")
    // })

    test('should render logo text header in pl and cz', () => {
        render(
            <AppContextProvider>
                <Navbar />
            </AppContextProvider>
        )
        const langSelect = screen.getByRole('combobox')
        // const langSelect = screen.getByTestId('lang-selector')
        fireEvent.change(langSelect, { target: { value: 'pl' }})

        let logo = screen.getByText('Nauka Liczenia');
        expect(logo).toBeInTheDocument();

        fireEvent.change(langSelect, { target: { value: 'cz' }})
        logo = screen.getByText('Nauč se Počítat');
        expect(logo).toBeInTheDocument();
    })
})
