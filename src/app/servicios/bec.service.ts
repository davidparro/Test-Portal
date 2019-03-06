import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BecService {
    public show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
