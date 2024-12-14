import { Component, HostListener } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { AuthService } from 'src/app/auth/services/auth.service';
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
  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  formularioAuth() {
    this.authService.mostrarFormulario();
    console.log('Abriendo loginForm');
  }
  
  toggleMenu() {
    this.menuService.toggle();
    console.log('Abierto?');
  }
}
