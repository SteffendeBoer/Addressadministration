import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartpreviewComponent } from './chartpreview/chartpreview.component';
import { ChartoptionComponent } from './chartoption/chartoption.component';
import { TabledataComponent } from './tabledata/tabledata.component';

const routes: Routes = [
  { path: 'chartpreview', component: ChartpreviewComponent },
  { path: 'tabledata', component: TabledataComponent },
  { path: 'chartoption', component: ChartoptionComponent },
  { path: '', redirectTo: '/chartpreview', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  // imports: [
    // CommonModule
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
