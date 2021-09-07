import { animate, state, style, transition, trigger } from '@angular/animations';

// MARKED TRIGGER
export const markedTrigger = trigger('markedState', [
    state('default', style({
        'background-color': '#eee',
    })),
    state('marked', style({
        'background-color': '#ccc',
    })),
    transition('default <=> marked', animate('400ms ease-out')),
]);


// FADE IN & OUT
export const fade = trigger('fade', [
    state('void', style({
        opacity: 0,
    })),
    transition(':enter, :leave', [
        animate(1000)
    ])
]);

// ANIMATE TRIGGER
export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
        animate(400, style({
            width: 0
        })),
        animate(400, style({
            width: '*'
        }))
    ])
]);

// ANIMATE ITEMS SLIDING INTO POSITION & FADES THEM
export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('1500ms ease-out', style({
            opacity: 1,
            transform: 'translateX(0)'
        }))
    ]),
    transition(':leave', [
        animate('1500ms ease-in', style({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ])
]);

