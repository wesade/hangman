import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';

describe('hangman game', () => {

    const MAX_CLICKS = 15;

    it('should render call to action', async () => {
        const page = await newSpecPage({components: [HangmanGame]});
        await page.setContent(`
            <hangman-game>
            </hangman-game>
        `);

        let result;
        page.root.addEventListener('charClick', () => {
            result = true;
        });

        (page.root.shadowRoot.querySelector('li') as HTMLElement).click();

        await expect(result).toBeTruthy();
    });

    it('should rerender the component', async () => {
        const page = await newSpecPage({components: [HangmanGame]});
        await page.setContent(`
            <hangman-game>
            </hangman-game>
        `);

        for (let i = 1; i <= MAX_CLICKS; i++) {
            (page.root.shadowRoot.querySelector('li') as HTMLElement).click();
        }
        await page.waitForChanges();

        let result;
        page.root.addEventListener('buttonClick', () => {
            result = true;
        });

        (page.root.shadowRoot.querySelector('.button') as HTMLElement).click();

        await expect(result).toBeTruthy();
    });
});