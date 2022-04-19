import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { SaluteComponent } from './salute/salute.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditSaluteComponent } from './edit-salute/edit-salute.component';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { TabledataComponent } from './tabledata/tabledata.component';
import { ChartoptionComponent } from './chartoption/chartoption.component';
import { ChartpreviewComponent } from './chartpreview/chartpreview.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    ContactComponent,
    SaluteComponent,
    EditCustomerComponent,
    EditSaluteComponent,
    EditAddressComponent,
    EditContactComponent,
    TabledataComponent,
    ChartoptionComponent,
    ChartpreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatSortModule,
    MatListModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditAddressComponent]
})
export class AppModule { }
