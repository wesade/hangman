import {h} from '@stencil/core';

export const Counter = ( {clicks, chars} ) => {
    return (
        <div>
            <p class="clicks">You had clicks: {clicks}</p>
            <p class="chars">You had the chars: {chars}</p>
        </div>
    );
};
