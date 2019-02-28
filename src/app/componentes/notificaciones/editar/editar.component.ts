import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.scss']
})
export class NotifiacionesEditarComponent implements OnInit {
    idNotificacion: number;

    constructor(
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe(
            params => {
                this.idNotificacion = parseInt(params.get('id'), 10);
            }
        );
    }

    ngOnInit() {
        console.log('Id notificacion: ', this.idNotificacion);
        $(document).ready(() => {
            setTimeout(() => {
                $('.fechas input').datepicker(
                    {
                        showOn: 'button',
                        buttonImage: 'assets/img/calendario-popup.png',
                        buttonImageOnly: true,
                        buttonText: ''
                    },
                    $.datepicker.regional['es']
                );
                $('.fechas input').datepicker('setDate', new Date());
            });
        });
    }

}
