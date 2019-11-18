import { h } from '@stencil/core';

export const Word = ({word, clickedChars, onHandleWinner}) => {

    const replaceCharsWithUnderScore = (randomWordToGuess, clickedChars, onHandleWinner) => {
        let underscoredWord = '';

        for (let i = 0; i < randomWordToGuess.length; i++) {
            const char = randomWordToGuess[i];
            if (clickedChars.includes(char)) {
                underscoredWord += char;
            } else {
                underscoredWord += '_';
            }
        }

        if(word === underscoredWord) {
            onHandleWinner();
        }

        return underscoredWord;
    };

    return <p class="word">{replaceCharsWithUnderScore(word, clickedChars, onHandleWinner)}</p>;
};
