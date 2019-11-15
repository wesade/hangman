import { h } from '@stencil/core';

export const Word = ({word, clickedChars}) => {

    const replaceCharsWithUnderScore = (randomWordToGuess, clickedChars) => {
        let underscoredWord = '';

        for (let i = 0; i < randomWordToGuess.length; i++) {
            const char = randomWordToGuess[i];
            if (clickedChars.includes(char)) {
                underscoredWord += char;
            } else {
                underscoredWord += '_';
            }
        }

        return underscoredWord;
    };

    return <p class="word">{replaceCharsWithUnderScore(word, clickedChars)}</p>;
};
