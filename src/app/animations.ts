import { animate, state, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    state('default', style({
        'background-color': '#eee',
    })),
    state('marked', style({
        'background-color': '#ccc',
    })),
    transition('default <=> marked', animate('400ms ease-out')),
]);

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        animate(3000)
    ])
]);