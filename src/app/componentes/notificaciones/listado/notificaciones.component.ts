import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

enum Tabs_Notificaciones {
    MIS_NOTIFICACIONES,
    MIS_REPRESENTADOS
}

@Component({
    selector: 'app-notificaciones',
    templateUrl: './notificaciones.component.html',
    styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesListadoComponent implements OnInit {
    moment = moment;
    TABS = Tabs_Notificaciones;
    tabSelected = Tabs_Notificaciones.MIS_NOTIFICACIONES;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }
    
    esNueva(idNotificacion: number){
        if (idNotificacion === 1 || idNotificacion ===2) {
            return true;
        }
        return false;
    }

    esRechazada(idNotificacion: number){
        if (idNotificacion === 5) {
            return true;
        }
        return false;
    }

    goTo(id: number) {
        this.router.navigate(['/notificaciones/editar/' + id]);
    }
}

