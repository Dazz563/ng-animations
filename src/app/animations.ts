import { animate, state, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    state('default', style({
        'background-color': 'transparent',
    })),
    state('marked', style({
        'background-color': '#ccc',
    })),
    transition('default <=> marked', animate('400ms ease-out')),
]);