import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-notificaciones',
    templateUrl: './notificaciones.component.html',
    styleUrls: ['./notificaciones.component.scss']
})
export class GestionNotificacionesComponent implements OnInit {
    moment = moment;
    resultadosDNI = false;

    constructor() { }

    ngOnInit() {
    }

}
