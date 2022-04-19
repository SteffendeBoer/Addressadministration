import { SearchService } from './../search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './../customer';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
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
export class CustomerComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  columnsToDisplay: string[] = ['id', 'companyname', 'companyFounding', 'companyEmail', 'edit'];
  datasource: MatTableDataSource<Customer>;

  constructor(private http: HttpClient, private search: SearchService,  public dialog: MatDialog) {
    search.searchChanged.subscribe(value => {
      this.datasource.filter = value;
    });
  }

  customerUrl = 'https://localhost:5001/api/Customers';

  getCustomers() {
    return this.http.get(this.customerUrl).toPromise().then(res => {

      this.datasource = new MatTableDataSource<Customer>(res as Customer[]);
      this.datasource.sort = this.sort;

      this.search.hide = true;
    });
  }
  delete(id, deleteUrl) {
    if (confirm('Soll dieser Eintrag gelöscht werden?')) {
      this.http.delete(deleteUrl + id)
        .toPromise().then(() => {
          this.getCustomers();
        });
    }
  }
  ngOnInit() {
    this.getCustomers();
  }
}
