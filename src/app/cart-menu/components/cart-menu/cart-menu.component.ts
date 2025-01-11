import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import data from '../../../../assets/mockdata.json';
import { ProductsData } from 'src/app/shared/interfaces/products';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css'],
})
export class CartMenuComponent implements OnInit, OnDestroy {
  cartOpen: boolean = false;
  cartItems: string[] = [];
  emptyCart: boolean = true;

  subscription!: Subscription;

  

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    const cartProducts: ProductsData = data;
    //this.cartItems = cartProducts.top_ventas;

    this.subscription = this.menuService.cartOpen$.subscribe((cartOpen) => {
      this.cartOpen = cartOpen;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  removeItem(item: string) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
  }

  closeMenu(): void {
    this.menuService.toggleCartMenu();
    console.log('Cesta cerrada');
  }
}
