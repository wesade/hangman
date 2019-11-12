import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';

describe('hangman game', () => {
    it('should render 29 items with a letter in each of it', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        expect(page.root.shadowRoot.querySelector('ul').childNodes).toHaveLength(29);
    });
});