import { newSpecPage } from '@stencil/core/testing';
import { HangmanGame } from '../src/components/hangman-game';
import service from '../src/services/service';

describe('hangman game', () => {

    const MAX_CLICKS = 15;

    it('should render a hint if max count is reached.', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        for(let i = 1; i <= MAX_CLICKS; i++) {
            (page.root.shadowRoot.querySelector('li') as HTMLElement).click();
        }
        await page.waitForChanges();

        expect(page.root.shadowRoot.querySelector('.hint').textContent).toEqual('Maximum clicks (15) reached!');
    });

    it('should render a hint if clicked char is not in word.', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        jest.spyOn(service, 'isLetterInWord').mockImplementation(() => false);

        (page.root.shadowRoot.querySelector('li[id=X]') as HTMLElement).click();
        await page.waitForChanges();

        expect(page.root.shadowRoot.querySelector('.hint').textContent).toEqual('X is not in the word!');
    });

    it('should render a hint if clicked char is in word.', async () => {
        const page = await newSpecPage({ components: [HangmanGame] });
        await page.setContent(`
            <hangman-game></hangman-game>
       `);

        jest.spyOn(service, 'isLetterInWord').mockImplementation(() => true);

        (page.root.shadowRoot.querySelector('li[id=A]') as HTMLElement).click();
        await page.waitForChanges();

        expect(page.root.shadowRoot.querySelector('.hint').textContent).toEqual('Great, A is in the word!');
    });
});