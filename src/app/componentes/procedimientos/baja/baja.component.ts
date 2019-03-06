import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.scss']
})
export class ProcedimientosBajaComponent implements OnInit {
    moment = moment;
    resultados = false;

  constructor() { }

  ngOnInit() {
  }

}
