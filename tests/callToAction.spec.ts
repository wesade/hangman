import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';

describe('hangman game', () => {

    it('should render call to action', async () => {
        const page = await newSpecPage({components: [HangmanGame]});
        await page.setContent(`
            <hangman-game>
            </hangman-game>
        `);

        page.root.addEventListener('ctaClick', () => {
            console.log('A')
        });

        (page.root.shadowRoot.querySelector('li') as HTMLElement).click();

        //await expect(result).toBeTruthy();
    });
});