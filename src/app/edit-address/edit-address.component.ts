import { EditContactComponent } from './../edit-contact/edit-contact.component';
import { Address } from './../address';
import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  address: Address;
  editUrl = 'https://localhost:5001/api/Addresses/';

  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<EditContactComponent>) {
    if (data > 0) {
      this.http.get(this.editUrl + data).toPromise().then(res => {
      this.address = res as Address;
      });
      } else {
        if (data.key === 1) {
          this.address = new Address();
          this.address.customerId = data.idCustomer;
        } else {
          this.address = new Address();
          this.address.contactId = data.idContact;
        }
      }
  }

  ngOnInit(): void {
  }
  save()  {
    if (this.address.id != null) {
      this.http.put(this.editUrl + this.address.id, this.address)
        .toPromise().then(() => {
        this.dialogRef.close();
      });
    } else {
      this.http.post(this.editUrl, this.address)
      .toPromise().then(() => {
        this.dialogRef.close();
      });
    }
  }
  close() {
    this.dialogRef.close();
  }
}
