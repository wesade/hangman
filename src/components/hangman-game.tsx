import {Component, State, h, Event, EventEmitter} from '@stencil/core';
import { Alphabet } from './alphabet';
import { Counter } from './counter';
import { Hint } from './hint';
import { Word } from './word';
import { Button } from "./button";
import service from '../services/service';

@Component({
    tag: 'hangman-game',
    styleUrl: 'hangman-game.scss',
    shadow: true
})
export class HangmanGame {

    @State() text: string;
    @State() className: string = '';
    @State() clicks: number = 0;
    @State() showHint: boolean = false;
    @State() word: string = '';
    @State() clickedChars: string[] = [];
    @State() rerenderPage: boolean = false;
    @State() isWordSolved: boolean = false;
    @Event() charClick: EventEmitter;
    @Event() buttonClick: EventEmitter;

    handleCharClick(e) {
        this.charClick.emit(e);
        const letter = e.target.innerHTML;
        this.clicks += 1;

        if(!service.isCharAlreadyInArray(letter, this.clickedChars)) {
            this.clickedChars.push(letter);
        }

        const isLetterInWord = service.isLetterInWord(letter, this.word);

        if(!isLetterInWord) {
            this.text = letter + " is not in the word!";
            this.showHint = true
        } else {
            this.text = "Great, " + letter + " is in the word!";
            this.showHint = true
        }

        if(service.reachedMaxClicks(this.clicks)) {
            this.text = "Maximum clicks (" + this.clicks + ") reached!";
            this.showHint = true;
            this.rerenderPage = true;
            this.className = ' disabled'
        }
    }

    handleButtonClick(e) {
        this.buttonClick.emit(e);
        window.location.reload();
    }

    componentWillLoad() {
        this.word = service.randomWordToGuess();
    }

    componentDidUpdate() {
        if (this.isWordSolved) {
            this.text = "You won!";
            this.showHint = true;
            this.rerenderPage = true;
            this.className = ' disabled'
        }
    }

    render() {

        const word = <Word word={this.word} clickedChars={this.clickedChars}/>;
        if (this.word === word.$children$[0].$text$) {
            this.isWordSolved = true;
        }

        return <div>
            <Alphabet className={this.className} onCharClick={this.handleCharClick.bind(this)}></Alphabet>
            <Counter clicks={this.clicks} chars={this.clickedChars}></Counter>
            {this.showHint && <Hint text={this.text}></Hint>}
            {word}
            {this.rerenderPage && <Button onButtonClick={this.handleButtonClick.bind(this)}></Button>}
        </div>;
    }
}
