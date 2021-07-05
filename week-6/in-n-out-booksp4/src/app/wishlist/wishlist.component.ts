/*===============================
; Title: Wishlist Component Class File
; Date: 04 July 2021
; Author: George Henderson
; Description: Contains data for the Wishlist Component.
;===============================*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../IWishlistItem.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items : Array<IWishlistItem> = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
