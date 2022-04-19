import { Address } from './../address';
import { Salution } from './../salution';
import { Contact } from './../contact';
import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { MatSort } from '@angular/material/sort';
import { Customer } from '../customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: Contact;
  salute: Salution;
  addresses: any;
  address: any;
  id: number;
  hide: boolean;
  change: any;
  customer: any;
  datasourceAddress: MatTableDataSource<Address>;
  editUrl = 'https://localhost:5001/api/Contacts/';
  saluteUrl = 'https://localhost:5001/api/Salutes/';
  addressUrl =  'https://localhost:5001/api/Addresses/';
  customerUrl =  'https://localhost:5001/api/Customers/';

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  @ViewChild(('AddressSort'), { read: MatSort, static: true}) AddressSort: MatSort;
  columnsToDisplayAddress: string[] = ['street', 'streetnumber', 'location', 'edit'];

  // _formBuilder
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<EditContactComponent>) {
  }
  getContact(id) {
    return this.http.get(this.editUrl + id).toPromise().then(res => {
      this.contact = res as Contact;
      this.addresses = this.contact.addresses;
      this.datasourceAddress = new MatTableDataSource<Address>(this.addresses as Address[]);
      this.datasourceAddress.sort = this.AddressSort;
    });
  }
  getAddress() {
    this.http.get(this.editUrl + this.contact.id).toPromise().then(res => {
      this.change = res as Contact;

      this.addresses = this.change.addresses;
      this.datasourceAddress = new MatTableDataSource<Address>(this.addresses as Address[]);
      this.datasourceAddress.sort = this.AddressSort;
    });
  }
  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    if (this.data > 0) {
      this.http.get(this.editUrl + this.data).toPromise().then(res => {
        this.contact = res as Contact;
        this.addresses = this.contact.addresses;
        this.datasourceAddress = new MatTableDataSource<Address>(this.addresses as Address[]);
        this.hide = true;
      });
    } else {
      this.contact = new Contact();
      this.contact.customerId = this.data.idCustomer;
      this.contact.salutId = 1;

      this.http.post(this.editUrl, this.contact)
      .toPromise().then((con) => {
        con = con as Contact;
        // Funktioniert, aber meckert da dass Object nicht über eine "id" verfügt
        /*this.http.get(this.editUrl + con.id).toPromise().then(res => {
          this.contact = res as Contact;
          this.addresses = this.contact.addresses;
          this.datasourceAddress = new MatTableDataSource<Address>(this.addresses as Address[]);
        });*/
      });

      this.hide = false;
    }
    this.getSalute();
  }
  getSalute() {
    return this.http.get(this.saluteUrl).toPromise().then(res => {
      this.salute = res as Salution;
    });
  }
  save() {
    if (this.contact.id != null) {
     this.http.put(this.editUrl + this.contact.id, this.contact)
      .toPromise().then(() => {
        this.dialogRef.close();
      });
    }/* else {
      this.http.post(this.editUrl, this.contact)
      .toPromise().then(() => {
        this.dialogRef.close();
      });
      }*/
    }
  close() {
    this.dialogRef.close();
  }
  editAddress(address: Address) {
    this.dialog.open(EditAddressComponent, {data: address.id}).afterClosed().toPromise().then(() => {
      this.getContact(this.contact.id);
    });
  }
  addAddress() {
    this.http.put(this.editUrl + this.contact.id, this.contact)
    .toPromise().then(() => {
    });
    this.dialog.open(EditAddressComponent,
      {data: {id: '', idContact: this.contact.id, key: 2}}).afterClosed().toPromise().then(() => {
      this.getContact(this.contact.id);
    });
  }
  deleteAddress(id) {
    if (confirm('Soll dieser Eintrag gelöscht werden?')) {
      this.http.delete(this.addressUrl + id)
        .toPromise().then(() => {
          this.getContact(this.contact.id);
        });
    }
  }
}

