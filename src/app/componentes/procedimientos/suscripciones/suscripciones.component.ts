import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-suscripciones',
    templateUrl: './suscripciones.component.html',
    styleUrls: ['./suscripciones.component.scss']
})
export class ProcedimientosSuscripcionesComponent implements OnInit {

    moment = moment;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

}
