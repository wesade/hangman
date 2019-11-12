import {Component, h, Event, EventEmitter} from '@stencil/core';
import { Alphabet } from './alphabet';

@Component({
    tag: 'hangman-game',
    styleUrl: 'hangman-game.scss',
    shadow: true
})
export class HangmanGame {

    @Event() ctaClick: EventEmitter;

    handleCtaClick(e) {
        this.ctaClick.emit(e);
        console.log('####', e.target.innerHTML);
    }

    render() {
        return <div>
            <Alphabet onCtaClick={this.handleCtaClick.bind(this)}></Alphabet>
        </div>;
    }
}
