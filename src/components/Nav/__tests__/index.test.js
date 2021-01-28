import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
// declaring props
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSeleceted = jest.fn();
  const mockSetContactSelected = jest.fn();

// adds the cleanup utility
afterEach(cleanup)
describe('Nav component', () => {
    //  baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSeleceted}
            setContactSelected={mockSetContactSelected}
        />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSeleceted}
            setContactSelected={mockSetContactSelected}
            />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});
// describe used to organize tests
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } =  render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSeleceted}
            setContactSelected={mockSetContactSelected}
            />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        
    })
});
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        // add data-testid attributes to JSX
        const { getByTestId } =  render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSeleceted}
            setContactSelected={mockSetContactSelected}
            />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})