import { Component, OnInit } from '@angular/core';
import { Contact } from './../contact';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  datasource: Contact[];
  columnsToDisplay: string[] = ['id', 'firstname'];

  constructor(private http: HttpClient) {
  }

  customerUrl = 'https://localhost:5001/api/Contacts';

  getContact() {
    return this.http.get(this.customerUrl);
  }
  showContact() {
    this.getContact()
      .toPromise().then(res => {
        this.datasource = res as Contact[];
      });

  }

  ngOnInit() {
    this.showContact();
  }
}
