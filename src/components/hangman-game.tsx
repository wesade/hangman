import {Component, Prop, State, h, Event, EventEmitter} from '@stencil/core';
import { Alphabet } from './alphabet';
import { Hint } from './hint';
import { Word } from './word';
import service from '../services/service';

@Component({
    tag: 'hangman-game',
    styleUrl: 'hangman-game.scss',
    shadow: true
})
export class HangmanGame {

    @Prop() text: string;
    @State() clicks: number = 0;
    @State() showHint: boolean = false;
    @State() word: string = '';
    @State() clickedChars: string[] = [];
    @Event() ctaClick: EventEmitter;

    handleCtaClick(e) {
        this.ctaClick.emit(e);
        const letter = e.target.innerHTML;
        this.clickedChars.push(letter);
        this.clicks += 1;

        const isLetterInWord = service.isLetterInWord(letter, this.word);

        if(!isLetterInWord) {
            this.text = letter + " is not in the word!";
            this.showHint = true
        }

        if(service.reachedMaxClicks(this.clicks)) {
            this.text = "Maximum clicks (" + this.clicks + ") reached!";
            this.showHint = true;
        }
    }

    componentWillLoad() {
        this.word = service.randomWordToGuess();
    }


    // just to force a merge
    render() {
        return <div>
            <Alphabet onCtaClick={this.handleCtaClick.bind(this)}></Alphabet>
            {this.showHint && <Hint text={this.text}></Hint>}
            <Word word={this.word} clickedChars={this.clickedChars} />
        </div>;
    }
}
