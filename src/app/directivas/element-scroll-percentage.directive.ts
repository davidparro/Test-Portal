import { OnInit, OnDestroy, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ElementScrollPercentage } from '../modelos/element-scroll-percentage';

@Directive({
    selector: '[appScrollPercentage]'
})
export class ElementScrollPercentageDirective implements OnInit, OnDestroy {
    @Output() scrollPercentageEvent: EventEmitter<number>;

    private elementRef: ElementRef;
    private elementScrollPercentage: ElementScrollPercentage;
    private subscription: Subscription;

    constructor(
        elementRef: ElementRef,
        elementScrollPercentage: ElementScrollPercentage
    ) {

        this.elementRef = elementRef;
        this.elementScrollPercentage = elementScrollPercentage;

        this.scrollPercentageEvent = new EventEmitter();
        this.subscription = null;

    }

    public ngOnDestroy(): void {

        if (this.subscription) {
            this.subscription.unsubscribe();
        }

    }
/**
 * El propósito de esta directiva es actuar como pegamento entre el servicio ElementScrollService y el elemento que queremos
 * que use la directiva. Para recibir el porcentaje, debemos subscribirnos.
 */
public ngOnInit(): void {

        this.subscription = this.elementScrollPercentage
            .getScrollAsStream(this.elementRef.nativeElement)
            .subscribe(
                (percent: number): void => {
                    this.scrollPercentageEvent.next(percent);
                }
            );

    }

}
