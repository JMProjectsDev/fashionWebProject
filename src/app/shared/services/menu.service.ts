import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isOpen = new BehaviorSubject<boolean>(false);
  private cartOpen = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpen.asObservable();  
  public cartOpen$ = this.cartOpen.asObservable();

  constructor() { }

  public toggleSideMenu() {
    this.isOpen.next(!this.isOpen.value);
  }

  public toggleCartMenu(){
    this.cartOpen.next(!this.cartOpen.value);
  }
}
