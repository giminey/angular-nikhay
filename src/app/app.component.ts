import { Component } from '@angular/core';
import {stationList} from './station-list.const';

@Component({
  selector: 'my-app01',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent  {
  name = 'Angular321';
  List=stationList;
 
}
@Component({
  selector: 'test01',
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
      Super Hero Power: {{power| double:factor }}
    </p>
  `
})
export class doubleComponent {
  power = 5;
  factor = 1;
}
@Component({
  selector:'optionList',
  template:`
<select >

  <ng-container *ngFor="let h of optionList">    
      <option [ngValue]="h">{{h.UpdateTime|date:"hh:mm:ss"}}</option>
  </ng-container>

</select>
  <button *ngIf="ctl" (click)="ctl = !ctl">
    HI
  </button>
  <button *ngIf="!ctl" (click)="ctl = !ctl">
    NotHI
  </button>
  `
})
export class ListComponent{
  optionList=stationList;
  ctl=true;
}
