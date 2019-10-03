import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { AdditemComponent } from './additem/additem.component';
import { EdititemComponent } from './edititem/edititem.component';


@NgModule({
  declarations: [ItemlistComponent, ItemdetailComponent, AdditemComponent, EdititemComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemlistComponent, ItemdetailComponent, AdditemComponent, EdititemComponent]

})
export class RecordsModule { }
