import { Component, OnInit, HostListener } from '@angular/core';
import { ElementScrollPercentage } from 'src/app/modelos/element-scroll-percentage';
declare var $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    pageScroll: number;
    private elementScrollPercentage: ElementScrollPercentage;

    constructor(
        elementScrollPercentage: ElementScrollPercentage
    ) {
        this.elementScrollPercentage = elementScrollPercentage;
        this.pageScroll = 0;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        document.body.style.width = '100%';
        document.getElementById('main-menu').style.width = '100%';
    }
    ngOnInit() {
        $(document).ready(() => {
            $('#main-menu-sticky-wrapper').sticky();
        });
        this.elementScrollPercentage
            .getScrollAsStream() // Por defecto devuelve el documento en caso de no suministrarse el elemento.
            .subscribe(
                (percent: number): void => {
                    this.pageScroll = percent;
                }
            );
    }

    isSticky(): boolean {
        let res: boolean;
        res = false;
        const element = document.getElementById('main-menu-sticky-wrapper-sticky-wrapper');
        if (element) {
            if (element.classList.contains('is-sticky')) {
                res = true;
            }
        }
        return res;
    }
}
