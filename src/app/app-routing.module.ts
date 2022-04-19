import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditSaluteComponent } from './edit-salute/edit-salute.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ContactComponent } from './contact/contact.component';
import { SaluteComponent } from './salute/salute.component';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'address', component: AddressComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'salute', component: SaluteComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'edit-salute/:id', component: EditSaluteComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  // imports: [
    // CommonModule
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
