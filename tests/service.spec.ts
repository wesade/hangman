import service from '../src/services/service';

describe('service', () => {
    it('return message if 15 clicks were triggered', () => {
        expect(service.reachedMaxClicks(15)).toBeTruthy();
    });

    it('should return false if letter is not in word', () => {
       expect(service.isLetterInWord('X', 'WORD')).toBeFalsy();
    });

    it('should return true if letter is in word', () => {
        expect(service.isLetterInWord('A', 'CHRISTMAS')).toBeTruthy();
    });

    it('should return true if char was already clicked', () => {
        expect(service.isCharAlreadyInArray('B', ['B'])).toBeTruthy();
    });
});
