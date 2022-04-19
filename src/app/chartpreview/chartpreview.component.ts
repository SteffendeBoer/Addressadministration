import { Salution } from './../salution';
import { EditSaluteComponent } from './../edit-salute/edit-salute.component';
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from '../search.service';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-chartpreview',
  templateUrl: './chartpreview.component.html',
  styleUrls: ['./chartpreview.component.scss'],
  animations: [
    // Trigger gibt bindings an die elemente
    trigger('simpleFadeAnimation', [

      // Bestimme zustand wenn visible
      state('in', style({opacity: 1})),

      // Übergang von void zu Inhalt
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // Übergang von Inhalt zu void
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ChartpreviewComponent implements OnInit {
  salute: Salution;
  columnsToDisplay: string[] = ['id', 'salution', 'edit'];
  saluteUrl = 'https://localhost:5001/api/Salutes/';

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  datasourceSalution: MatTableDataSource<Salution>;

  constructor(private http: HttpClient, private search: SearchService, public dialog: MatDialog) {
    search.searchChanged.subscribe(value => {
      this.datasourceSalution.filter = value;
    });
  }

  panelOpenState = false;

  getSalute() {
    return this.http.get(this.saluteUrl).toPromise().then(res => {

      this.datasourceSalution = new MatTableDataSource<Salution>(res as Salution[]);

      this.datasourceSalution.sort = this.sort;
    });
  }
  delete(id, saluteUrl) {
    if (confirm('Soll dieser Eintrag gelöscht werden?')) {
      this.http.delete(saluteUrl + id)
        .toPromise().then(() => {
          this.getSalute();
        });
    }
  }
  /*showSalute() {
    this.getSalute()
      .toPromise().then(res => {
        this.datasourceSalute = res as Salution[];
      });
  }*/
  editSalute(salute: Salution) {
    this.dialog.open(EditSaluteComponent, {data: salute.id}).afterClosed().toPromise().then(() => {
      this.getSalute();
    });
  }
  addSalute() {
    this.dialog.open(EditSaluteComponent).afterClosed().toPromise().then(() => {
      this.getSalute();
    });
  }
  deleteSalute(id) {
    if (confirm('Soll dieser Eintrag gelöscht werden?')) {
      this.http.delete(this.saluteUrl + id)
        .toPromise().then(() => {
          this.getSalute();
        });
    }
  }
  ngOnInit() {
    this.search.hide = true;
    this.getSalute();
  }

  checked = false;
  indeterminate = false;
  box1 = false;
  box2 = false;
  box3 = false;
  box4 = false;

  selectBox1(button: boolean){
    this.box2 = false;
    this.box3 = false;
    this.box4 = false;
  }
  selectBox2(button: boolean){
    this.box1 = false;
    this.box3 = false;
    this.box4 = false;
  }
  selectBox3(button: boolean){
    this.box2 = false;
    this.box1 = false;
    this.box4 = false;
  }
  selectBox4(button: boolean){
    this.box1 = false;
    this.box2 = false;
    this.box3 = false;
  }
}
