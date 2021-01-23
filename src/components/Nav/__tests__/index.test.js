import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// adds the cleanup utility
afterEach(cleanup)
describe('Nav component', () => {
    //  baseline test
    it('renders', () => {
        render(<Nav />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});
// describe used to organize tests
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } =  render(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        
    })
});
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        // add data-testid attributes to JSX
        const { getByTestId } =  render(<Nav />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})