import { Component, OnInit } from '@angular/core';
import { Address } from './../address';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  datasource: Address[];
  columnsToDisplay: string[] = ['id', 'street', 'streetnumber', 'location'];

  constructor(private http: HttpClient) {
  }

  addressUrl = 'https://localhost:5001/api/Addresses';

  getAddress() {
    return this.http.get(this.addressUrl);
  }
  showAddress() {
    this.getAddress()
      .toPromise().then(res => {
        this.datasource = res as Address[];
      });

  }

  ngOnInit() {
    this.showAddress();
  }
}
