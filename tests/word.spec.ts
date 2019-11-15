import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';
import service from "../src/services/service";

describe('hangman game', () => {
    it('should render an underscore for each letter in word', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });

        jest.spyOn(service, 'randomWordToGuess').mockImplementation(() => 'WORD');

        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        expect(page.root.shadowRoot.querySelector('.word').textContent).toEqual('____');
    });

    it('should render an underscore for each letter in word', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });

        jest.spyOn(service, 'randomWordToGuess').mockImplementation(() => 'WORD');

        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        (page.root.shadowRoot.querySelector('li[id=O]') as HTMLElement).click();
        await page.waitForChanges();


        expect(page.root.shadowRoot.querySelector('.word').textContent).toEqual('_O__');
    });
});