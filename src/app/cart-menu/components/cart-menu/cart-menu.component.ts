import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent implements OnInit, OnDestroy {
  cartOpen: boolean = false;

  subscription !: Subscription;

  constructor(private menuService: MenuService){}

  ngOnInit(){
    this.subscription = this.menuService.cartOpen$.subscribe((cartOpen) => {
      this.cartOpen = cartOpen;
    })
    
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeMenu(): void {
    this.menuService.toggleCartMenu();
    console.log('Cesta cerrada');
  }
}
