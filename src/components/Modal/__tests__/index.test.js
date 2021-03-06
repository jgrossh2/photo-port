import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

 const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}
afterEach(cleanup)
describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
             />)
        expect(asFragment()).toMatchSnapshot();
    })
})
describe('Modal click event', () => {
    it('calls onClose Hadler', () => {
        // arrange: render modal
        // act: simulate click event
        const { getByText } = render (<Modal  
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
             />);
             fireEvent.click(getByText('Close this modal'));
        // assert: expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})

