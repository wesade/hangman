import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';

describe('hangman game', () => {
    it('should render the clicks', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        (page.root.shadowRoot.querySelector('li') as HTMLElement).click();
        await page.waitForChanges();

        expect(page.root.shadowRoot.querySelector('.clicks').textContent).toEqual('You had clicks: 1');
    });

    it('should render the clicked chars', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        (page.root.shadowRoot.querySelector('li[id=S]') as HTMLElement).click();
        await page.waitForChanges();

        expect(page.root.shadowRoot.querySelector('.chars').textContent).toEqual('You had the chars: S');
    });
});