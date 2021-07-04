import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCreatComponent } from './wishlist-creat.component';

describe('WishlistCreatComponent', () => {
  let component: WishlistCreatComponent;
  let fixture: ComponentFixture<WishlistCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
