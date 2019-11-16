import {h} from '@stencil/core';

export const Button = ( {onButtonClick} ) => {
    return (
        <button class="button" onClick={onButtonClick}>Restart!</button>
    );
};
