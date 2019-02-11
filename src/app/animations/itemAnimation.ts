import {
    state,
    animate,
    transition,
    query,
    group,
    style,
    trigger,
    stagger,
    keyframes
} from "@angular/animations";
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';

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

export const TranslateLeftToRIght =

trigger('TranslateLeftToRIght', [
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
                animate('0.5s', style({ opacity: 0, transform: 'translateX(100%) scale(1.5)' }))
            ])
        ], { optional: true })
        
    ])
]);



export const ListAnimation =
    trigger('ListAnimation', [

        transition('* => *', [ 
           query(':enter',style({opacity: 0}), {optional: true }),

           query(':enter', stagger('100ms',[
            animate('1s ease-in', keyframes([
                style({opacity:0, transform:'translateY(-100px)', offset: 0}),
                style({opacity:0.3, transform:'translateY(50px)', offset: .3}),
                style({opacity:1, transform:'translateY(0)', offset: 1}),
            ]))
           ]), { optional: true }),

           query(':leave', stagger('100ms',[
            animate('1s ease-in', keyframes([
                style({ 
                    opacity: 1, 
                    transform: 'translateY(0) scale(1)',
                    offset: 0
                }),
                style({
                    opacity: 0.5,
                    transform: 'translateY(50px)  scale(1.2)',
                    offset: .01
                }),
                style({
                    opacity: .3,
                    transform: 'translateY(-50px)  scale(1.5)',
                    offset: 1
                })
            ]))
           ]), { optional: true })

        ])
    ]);