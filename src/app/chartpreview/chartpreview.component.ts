import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from '../search.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-chartpreview',
  templateUrl: './chartpreview.component.html',
  styleUrls: ['./chartpreview.component.scss'],
})
export class ChartpreviewComponent implements OnInit {

  constructor() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
