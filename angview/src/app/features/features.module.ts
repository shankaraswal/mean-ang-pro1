import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientlistComponent } from './clientlist/clientlist.component';
import { FeatureproductComponent } from './featureproduct/featureproduct.component';
import { RecentworkComponent } from './recentwork/recentwork.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [ClientlistComponent, FeatureproductComponent, RecentworkComponent, SubscribeComponent],
  imports: [
    CommonModule
  ],
  exports: [ClientlistComponent, FeatureproductComponent, RecentworkComponent, SubscribeComponent]
})
export class FeaturesModule { }
