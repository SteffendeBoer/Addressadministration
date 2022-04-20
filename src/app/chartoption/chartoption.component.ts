import { Salution } from './../salution';
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from '../search.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-chartoption',
  templateUrl: './chartoption.component.html',
  styleUrls: ['./chartoption.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ChartoptionComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  panelOpenState = false;

  ngOnInit() {
  }

  balk1 = false;
  balk2 = false;
  balk3 = false;
  balk4 = false;

  line1 = false;
  line2 = false;
  line3 = false;
  line4 = false;

  circ1 = false;
  circ2 = false;
  circ3 = false;
  circ4 = false;

  selectbalk1(button: boolean){
    this.balk2 = false;
    this.balk3 = false;
    this.balk4 = false;
  }
  selectbalk2(button: boolean){
    this.balk1 = false;
    this.balk3 = false;
    this.balk4 = false;
  }
  selectbalk3(button: boolean){
    this.balk2 = false;
    this.balk1 = false;
    this.balk4 = false;
  }
  selectbalk4(button: boolean){
    this.balk1 = false;
    this.balk2 = false;
    this.balk3 = false;
  }

  //Linien
  selectline1(button: boolean){
    this.line2 = false;
    this.line3 = false;
    this.line4 = false;
  }
  selectline2(button: boolean){
    this.line1 = false;
    this.line3 = false;
    this.line4 = false;
  }
  selectline3(button: boolean){
    this.line2 = false;
    this.line1 = false;
    this.line4 = false;
  }
  selectline4(button: boolean){
    this.line1 = false;
    this.line2 = false;
    this.line3 = false;
  }

  //Linien
  selectcirc1(button: boolean){
    this.circ2 = false;
    this.circ3 = false;
    this.circ4 = false;
  }
  selectcirc2(button: boolean){
    this.circ1 = false;
    this.circ3 = false;
    this.circ4 = false;
  }
  selectcirc3(button: boolean){
    this.circ2 = false;
    this.circ1 = false;
    this.circ4 = false;
  }
  selectcirc4(button: boolean){
    this.circ1 = false;
    this.circ2 = false;
    this.circ3 = false;
  }
}
