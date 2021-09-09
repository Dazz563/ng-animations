import { animate, animation, group, query, style, transition, trigger, useAnimation } from "@angular/animations";

const fadeAnimation = animation([
    style({
        opacity: '{{ startOpacity }}'
    }),
    animate('{{ duration }}')
], { params: { startOpacity: 0, duration: '100ms' } })

export const routeFadeStateTrigger = (params) => trigger('routeFadeState', [
    transition(':enter', [
        useAnimation(fadeAnimation, { params: params })
    ]),
    transition(':leave', [
        animate(500, style({
            opacity: 0
        }))
    ]),
]);

export const routeSlideStateTrigger = trigger('routeState', [
    transition('* => *', [
        group([
            query(':enter', [
                style({
                    transform: 'translateY(-400px)',
                    opacity: 0
                }),
                animate('1000ms ease-out')
            ], { optional: true }),
            query(':leave', [
                animate('1000ms ease-out', style({
                    transform: 'translateY(600px)',
                    opacity: 0
                }))
            ], { optional: true })
        ]),
    ])
])