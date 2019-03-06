import { Component, OnInit, Output } from '@angular/core';
import { BecService } from 'src/app/servicios/bec.service';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.scss']
})
export class BecEditarComponent implements OnInit {

    constructor(private becService: BecService) { }

    ngOnInit() {
    }

    cancelar() {
        this.becService.show.next(false);
    }
}
