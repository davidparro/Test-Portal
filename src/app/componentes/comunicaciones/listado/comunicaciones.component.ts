import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-comunicaciones',
    templateUrl: './comunicaciones.component.html',
    styleUrls: ['./comunicaciones.component.scss']
})
export class ComunicacionesListadoComponent implements OnInit {
    moment = moment;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    esNueva(idComunicacion: number){
        if (idComunicacion === 1 || idComunicacion === 3) {
            return true;
        }
        return false;
    }

    goTo(id: number) {
        this.router.navigate(['/comunicaciones/editar/' + id]);
    }
}
