const MAX_CLICKS = 15;
const WORDS_TO_GUESS = ['APPLE', 'STRAWBERRY', 'BANANA', 'YUCATAN'];

const reachedMaxClicks = (clicks) => {
    return clicks === MAX_CLICKS;
};

const randomWordToGuess = () => {
    return WORDS_TO_GUESS[Math.floor(Math.random() * WORDS_TO_GUESS.length)];
};

const isLetterInWord = (letter, wordToGuess) => {
    return wordToGuess.match(letter);
};

const isCharAlreadyInArray = (char, allChars) => {
    return allChars.includes(char);
};

const service = {
    reachedMaxClicks,
    randomWordToGuess,
    isLetterInWord,
    isCharAlreadyInArray
};

export default service;