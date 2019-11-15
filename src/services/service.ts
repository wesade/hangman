const MAX_CLICKS = 15;
const WORDS_TO_GUESS = ['APPLE', 'STRAWBERRY', 'BANANA'];

const reachedMaxClicks = (clicks) => {
    return clicks === MAX_CLICKS;
};

const randomWordToGuess = () => {
    return WORDS_TO_GUESS[Math.floor(Math.random() * WORDS_TO_GUESS.length)];
};

const isLetterInWord = (letter, wordToGuess) => {
    return wordToGuess.match(letter);
};

const service = {
    reachedMaxClicks,
    randomWordToGuess,
    isLetterInWord
};

export default service;