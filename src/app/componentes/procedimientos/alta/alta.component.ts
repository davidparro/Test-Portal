import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-alta',
    templateUrl: './alta.component.html',
    styleUrls: ['./alta.component.scss']
})
export class ProcedimientossAltaComponent implements OnInit {
    moment = moment;
    resultados = false;

    constructor() { }

    ngOnInit() {
    }

}
