import { Component, OnInit, Output } from '@angular/core';
import { BecService } from 'src/app/servicios/bec.service';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.scss']
})
export class BecCrearComponent implements OnInit {

    constructor(private becService: BecService) { }

    ngOnInit() {
    }

    cancelar() {
        this.becService.show.next(false);
    }
}
