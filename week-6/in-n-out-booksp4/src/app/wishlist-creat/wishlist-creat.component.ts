/*===============================
; Title: Wishlist-Create Component Class File
; Date: 04 July 2021
; Author: George Henderson
; Description: Contains data for the Wishlist-Create Component.
;===============================*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../IWishlistItem.interface';


@Component({
  selector: 'app-wishlist-creat',
  templateUrl: './wishlist-creat.component.html',
  styleUrls: ['./wishlist-creat.component.css']
})
export class WishlistCreatComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem

  constructor() {
    this.item = {} as IWishlistItem;
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    });
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
}
