import { Injectable } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  hide: boolean;
  value: string;
  searchChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }


  /*applyFilter(event: Event, dataSource) {
    const filterValue = (event.target as HTMLInputElement).value;
    dataSource.filter = filterValue.trim().toLowerCase();
  }*/
}
