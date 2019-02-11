import {
    state,
    animate,
    transition,
    query,
    group,
    style,
    trigger,
    stagger
} from "@angular/animations";

export const fadeInOutAnimation =

trigger('fadeInOutAnimation', [
    transition('* => *', [ 

        query(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%) scale(1.2)'
            }),
            stagger('100ms', [
            animate('0.5s', style({ opacity: 1 , transform: 'translateX(0) scale(1)'}))
            ])
        ], { optional: true }),

        query(':leave', [
            style({
                opacity:1,
                transform: 'translateX(0)'
            }),
            stagger('100ms', [
                animate('0.5s', style({ opacity: 0, transform: 'translateX(-100%) scale(1)' }))
            ])
        ], { optional: true })
        
    ])
]);