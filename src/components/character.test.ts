import { Character } from '../types/character';
import { createCharacter } from './character';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

const setState = (isAlive: boolean) => {
    return isAlive;
};

describe('Given character function', () => {
    describe('When called with valid parameters', () => {
        const selector = 'body';
        const position: InsertPosition = 'beforeend';
        const character: Character = {
            id: 1,
            name: 'TestName',
            family: 'TestFamily',
            age: 30,
            isAlive: true,
            reignYears: 10,
            weapon: 'Sword',
            adviseTo: {} as Character,
            servesTo: {} as Character,
            message: '',
            category: 'king',
        } as Character;
        test.only('Then the document should be in the document', () => {
            //Act
            createCharacter(selector, position, character);
            const element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
            expect(element).toBeInTheDocument();
            // expect(element).toHaveClass('character');
            // expect(element).toHaveAttribute('aria-label', `${character.id}`);
            // expect(element).toHaveTextContent(character.name);
            // expect(element).toHaveTextContent(character.family);
            // expect(element).toHaveTextContent(character.age.toString());
            // expect(element).toHaveTextContent(character.category);
        });
    });
});
