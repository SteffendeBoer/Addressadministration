import { Component, OnInit } from '@angular/core';

export interface Dataset1 {
  value: number;
  position: number;
}

export interface Dataset2 {
  value: number;
  position: number;
}

const Dataset1: Dataset1[] = [
  {position: 1, value: 15},
  {position: 2, value: 17},
  {position: 3, value: 41},
  {position: 4, value: 83},
];

const Dataset2: Dataset2[] = [
  {position: 1, value: 15},
  {position: 2, value: 30},
  {position: 3, value: 65},
  {position: 4, value: 20},
];


@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {
  panelOpenState = false;
  box1 = false;
  box2 = false;
  mobile = false;

  constructor() { }

  selectBox1(button: boolean){

  }

  selectBox2(button: boolean){

  }

  ngOnInit(): void {
    if (window.screen.width <= 500) { // 768px portrait
      this.mobile = true;
      console.log(this.mobile);
    }
  }

  displayedColumns: string[] = ['position', 'value'];
  dataSource1 = Dataset1;
  dataSource2 = Dataset2;
}
