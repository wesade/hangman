import {h} from '@stencil/core';

export const Hint = ({ text }) => {
    return (
        <p class="hint hint__text">{text}</p>
    );
};
