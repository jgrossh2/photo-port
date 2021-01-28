import React from 'react';
// render the component(not visibly) 
// cleanup to prevent memory leaking or data collisions
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
// string passed in declares which component is being tested
describe('About component', () => {
    // First test to create baseline to verify component rendering
    // first argument, string declares what is being tested, second callback function runs the test
    it('renders', () => {
        render(<About />);
    });
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
        // __snapshots__ folder created, used as a base model of structure and compared against new snapshots from asFragment function
    });
    // Second test
})