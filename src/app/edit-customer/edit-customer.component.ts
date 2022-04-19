import { EditContactComponent } from './../edit-contact/edit-contact.component';
import { MatSort } from '@angular/material/sort';
import { Contact } from './../contact';
import { Address } from './../address';
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { Customer } from './../customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import {Location} from '@angular/common';
import { SearchService } from '../search.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

export interface DialogData {
  id: number;
  idCustomer: number;
}

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  addresses: any;
  contacts: any;
  salute: any;
  change: any;
  hide: boolean;
  datasourceAddress: MatTableDataSource<Address>;
  datasourceContact: MatTableDataSource<Contact>;
  add = 0;
  isButtonVisible = false;

  @ViewChild(('AddressSort'), { read: MatSort, static: true}) AddressSort: MatSort;
  @ViewChild(('ContactSort'), { read: MatSort, static: true}) ContactSort: MatSort;

  columnsToDisplayAddress: string[] = ['street', 'streetnumber', 'location', 'edit'];
  columnsToDisplayContact: string[] = ['firstname', 'lastname', 'salution', 'edit'];

  editUrl = 'https://localhost:5001/api/Customers/';
  addressUrl = 'https://localhost:5001/api/Addresses/';
  contactUrl = 'https://localhost:5001/api/Contacts/';

  constructor(private search: SearchService, private http: HttpClient,
              private route: ActivatedRoute, public dialog: MatDialog, private location: Location) {
                search.searchChanged.subscribe(value => {
                  this.datasourceAddress.filter = value;
                });
                search.searchChanged.subscribe(value => {
                  this.datasourceContact.filter = value;
                });
  }
  ngOnInit(): void {
    this.route.params.subscribe(parameter => {
      if (parameter.id > 0) {
        this.get(parameter.id);
      } else {
        this.customer = new Customer();
        this.http.post(this.editUrl, this.customer)
          .toPromise().then(res => {
            this.customer = res as Customer;
        });
      }
    });
  }
  get(id) {
    this.http.get(this.editUrl + id).toPromise().then(res => {
      this.customer = res as Customer;

      this.addresses = this.customer.addresses;
      this.datasourceAddress = new MatTableDataSource<Address>(this.addresses as Address[]);
      this.datasourceAddress.sort = this.AddressSort;

      this.contacts = this.customer.contacts;
      this.datasourceContact = new MatTableDataSource<Contact>(this.contacts as Contact[]);
      this.datasourceContact.sort = this.ContactSort;

      this.setTab(this.add);
    });
  }
  getAddress() {
    this.http.get(this.editUrl + this.customer.id).toPromise().then(res => {
      this.change = res as Customer;

      this.addresses = this.change.addresses;
      this.datasourceAddress = new MatTableDataSource<Address>(this.addresses as Address[]);
      this.datasourceAddress.sort = this.AddressSort;
    });
  }
  getContact() {
    this.http.get(this.editUrl + this.customer.id).toPromise().then(res => {
      this.change = res as Customer;

      this.contacts = this.change.contacts;
      this.datasourceContact = new MatTableDataSource<Contact>(this.contacts as Contact[]);
      this.datasourceContact.sort = this.ContactSort;
    });
  }
  save() {
    this.http.put(this.editUrl + this.customer.id, this.customer)
    .toPromise().then(() => {
      this.location.back();
    });
  }
  deleteAddress(id) {
    if (confirm('Soll dieser Eintrag gelöscht werden?')) {
      this.http.delete(this.addressUrl + id)
        .toPromise().then(() => {
          this.getAddress();
        });
    }
  }
  editAddress(address: Address) {
    this.dialog.open(EditAddressComponent, {data: address.id}).afterClosed().toPromise().then(() => {
      this.getAddress();
    });
  }
  addAddress() {
    this.dialog.open(EditAddressComponent, {data: {id: '', idCustomer: this.customer.id, key: 1}}).afterClosed().toPromise().then(() => {
      this.getAddress();
    });
  }
  editContact(contact: Contact) {
    this.dialog.open(EditContactComponent, {data: contact.id}).afterClosed().toPromise().then(() => {
      this.add = 2;
      this.getContact();
    });
  }
  addContact() {
    this.dialog.open(EditContactComponent, {data: {id: '', idCustomer: this.customer.id}}).afterClosed().toPromise().then(() => {
      this.getContact();
    });
  }
  deleteContact(id) {
    if (confirm('Soll dieser Eintrag gelöscht werden?')) {
      this.http.delete(this.contactUrl + id)
        .toPromise().then(() => {
          this.getContact();
        });
    }
  }
  addAny() {
    if (this.add === 1) {
      this.addAddress();
    } else if (this.add === 2) {
      this.addContact();
    }
  }
  setTab(add) {
    this.add = add.index;
    if ((add.index === 1) || (add.index === 2)) {
      this.isButtonVisible = true;
      this.search.hide = true;
    } else {
      this.isButtonVisible = false;
      this.search.hide = false;
    }
  }
}

