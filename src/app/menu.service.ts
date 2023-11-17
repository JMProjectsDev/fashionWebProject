// menu.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isOpen = new BehaviorSubject<boolean>(true);

  public isOpen$ = this.isOpen.asObservable();

  constructor() { }

  public toggle() {
    this.isOpen.next(!this.isOpen.value);
  }
}
