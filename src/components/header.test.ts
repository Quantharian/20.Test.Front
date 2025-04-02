import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createHeader } from './header';

describe('createHeader', () => {
    beforeEach(() => {
        document.body.innerHTML = ''; // Clear the DOM before each test
    });

    it('should render the header in the body by default', () => {
        createHeader();
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
        expect(header).toContainHTML('<h1>My Header</h1>');
    });

    it('should render the header in the specified container', () => {
        document.body.innerHTML = '<div id="custom-container"></div>';
        createHeader('#custom-container');
        const container = document.querySelector('#custom-container');
        const header = container?.querySelector('header');
        expect(header).toBeInTheDocument();
        expect(header).toContainHTML('<h1>My Header</h1>');
    });

    it('should not throw an error if the container is not found', () => {
        expect(() => createHeader('#non-existent')).not.toThrow();
    });
});
