import { render } from './base.js';

export function createHeader(
    selector: string = 'body',
    position: InsertPosition = 'afterbegin',
): void {
    const container = document.querySelector(selector);
    if (container) {
        const template = `
            <header>
                <h1>My Header</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
        render(selector, position, template);
    }
}
