import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//custome components
import { PagenotfoundComponent } from './global/pagenotfound/pagenotfound.component'
import { DashboardComponent } from './global/dashboard/dashboard.component';
import { ItemlistComponent } from 'src/app/records/itemlist/itemlist.component';
import { ItemdetailComponent } from './records/itemdetail/itemdetail.component';

//routes
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: DashboardComponent}, 
  {path: 'items', component: ItemlistComponent},
  {path: '**', component: PagenotfoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
