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
