import {h} from '@stencil/core';

export const Alphabet = ( {className, onCharClick} ) => {

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü'];

    return (
        <ul class="list">
            {alphabet.map( letter => {
                return (
                    <li id={letter} class={"list__item" + className} onClick={onCharClick}>{letter}</li>
                );
            })}
        </ul>
    );
};
