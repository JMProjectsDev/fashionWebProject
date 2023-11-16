import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Subscription } from 'rxjs';
import * as data from '../../../assets/mockdata.json';
import { Categories } from '../../categories';

import { slideAnimation } from '../../animations';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [slideAnimation]
})
export class SideMenuComponent implements OnInit, OnDestroy {
  //@HostBinding('@fadeInTrigger') fadeInTrigger = true;

  //categorias para hombre
  categorias_ropa: string[] = [];
  tipos_zapatillas: string[] = [];

  //categorías para mujer:
  categorias_ropa_mujer: string[] = [];
  tipos_zapatillas_mujer: string[] = [];

  menuOptionsList: string[] = [];
  activeGender: 'Hombre' | 'Mujer' = 'Hombre';

  isOpen: boolean = false;
  subscription!: Subscription;

  //para controlar la animacion
  animationState: number = 0;
  slideDirection: 'left' | 'right' = 'left';

  constructor(public menuService: MenuService) {}

  ngOnInit() {
    this.subscription = this.menuService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });

    const categoriasData: Categories = (data as any).default;
    this.categorias_ropa = categoriasData.categorias_ropa;
    const tipos_zapatillasData: Categories = (data as any).default;
    this.tipos_zapatillas = tipos_zapatillasData.tipos_zapatillas;

    const menuOptionData: Categories = (data as any).default;
    this.menuOptionsList = menuOptionData.menuOptionsList;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Función para cambiar el estado activo
  setActiveGender(gender: 'Hombre' | 'Mujer') {
    this.activeGender = gender;
    this.animationState++;
    this.slideDirection = gender === 'Hombre' ? 'left' : 'right';

    if (gender === 'Hombre') {
      const categoriasData: Categories = (data as any).default;
      this.categorias_ropa = categoriasData.categorias_ropa;
      const tipos_zapatillasData: Categories = (data as any).default;
      this.tipos_zapatillas = tipos_zapatillasData.tipos_zapatillas;
    } else {
      const categorias_mujerData: Categories = (data as any).default;
      this.categorias_ropa = categorias_mujerData.categorias_ropa_mujer;
      const tipos_zapatillas_mujerData: Categories = (data as any).default;
      this.tipos_zapatillas = tipos_zapatillas_mujerData.tipos_zapatillas_mujer;
    }
  }
}
