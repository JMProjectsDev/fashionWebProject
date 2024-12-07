import { Component, HostListener } from '@angular/core';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  scrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50; // Detecta si se ha hecho scroll
  }
  constructor(private menuService: MenuService) {}

  toggleMenu() {
    this.menuService.toggle();
    console.log("Abierto?")
  }
}
