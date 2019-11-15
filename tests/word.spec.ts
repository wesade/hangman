import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';

describe('hangman game', () => {
    it('should render an underscore for each letter in word', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        //expect(page.root.shadowRoot.querySelector('.word').textContent).toEqual('_____');
    });
});