import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service'

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
  providers:[ItemsService]
})
export class ItemlistComponent implements OnInit {
  title :string='Item List';
  items: any;
  constructor(private _itemservice: ItemsService){}

  ngOnInit(){
  this._itemservice.getiItemlist().subscribe(
      (data) => {
        this.items = data
      }
    );


  }


}
