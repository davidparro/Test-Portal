import { Component, OnInit, Output } from '@angular/core';
import { BecService } from 'src/app/servicios/bec.service';

@Component({
    selector: 'app-borrar',
    templateUrl: './borrar.component.html',
    styleUrls: ['./borrar.component.scss']
})
export class BecBorrarComponent implements OnInit {

    constructor(private becService: BecService) { }

    ngOnInit() {
    }

    cancelar() {
        this.becService.show.next(false);
    }
}
