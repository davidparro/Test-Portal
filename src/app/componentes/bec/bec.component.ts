import { Component, OnInit } from '@angular/core';
import { BecService } from 'src/app/servicios/bec.service';

@Component({
    selector: 'app-bec',
    templateUrl: './bec.component.html',
    styleUrls: ['./bec.component.scss']
})
export class BecComponent implements OnInit {
    selected = false;

    constructor(
        public becService: BecService
    ) { }

    ngOnInit() {
    }

}
