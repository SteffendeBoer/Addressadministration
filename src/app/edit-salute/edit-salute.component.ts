import { EditContactComponent } from './../edit-contact/edit-contact.component';
import { Salution } from './../salution';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-salute',
  templateUrl: './edit-salute.component.html',
  styleUrls: ['./edit-salute.component.scss']
})
export class EditSaluteComponent implements OnInit {
  salute: Salution;
  editUrl = 'https://localhost:5001/api/Salutes/';

  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<EditContactComponent>) {
    if (data > 0) {
      this.http.get(this.editUrl + data).toPromise().then(res => {
      this.salute = res as Salution;
      });
      } else {
        this.salute = new Salution();
      }
  }

  ngOnInit(): void {
  }
  save()  {
    if (this.salute.id != null) {
      this.http.put(this.editUrl + this.salute.id, this.salute)
        .toPromise().then(() => {
        this.dialogRef.close();
      });
    } else {
      this.http.post(this.editUrl, this.salute)
      .toPromise().then(() => {
        this.dialogRef.close();
      });
    }
  }
  close() {
    this.dialogRef.close();
  }
}
