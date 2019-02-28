import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-procedimientos',
    templateUrl: './procedimientos.component.html',
    styleUrls: ['./procedimientos.component.scss']
})
export class ProcedimientosComponent implements OnInit {
    moment = moment;
    resultados = false;

    constructor() { }

    ngOnInit() {
    }

    estaSuscrito(idProcedimiento: number) {
        if (idProcedimiento === 3) {
            return true;
        }
        return false;
    }
}
