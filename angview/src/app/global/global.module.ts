import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MastheadComponent } from './masthead/masthead.component';
import { FooterComponent } from './footer/footer.component';
import { SocialbucketComponent } from './socialbucket/socialbucket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [HeaderComponent, NavComponent, MastheadComponent, FooterComponent, SocialbucketComponent, DashboardComponent, PagenotfoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NavComponent, MastheadComponent, FooterComponent, SocialbucketComponent, DashboardComponent, PagenotfoundComponent]

})
export class GlobalModule { }
