import { Component, HostListener, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSearchRoute: boolean = false;
  scrolled = false;
  scrollEnabled = true;

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private router: Router
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.scrollEnabled) {
      this.scrolled = window.scrollY > 50; // Detecta si se ha hecho scroll
    }
  }

  ngOnInit(): void {
    // Detectar cambios de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSearchRoute = this.router.url.includes('/search');        
        this.scrollEnabled = !this.isSearchRoute;        
        if (this.isSearchRoute) {
          this.scrolled = false;
        }
      }
    });
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }

  formularioAuth(): void {
    this.authService.mostrarFormulario();
    console.log('Abriendo loginForm');
  }

  toggleSideMenu(): void {
    this.menuService.toggleSideMenu();
    console.log('Abriendo side menu');
  }

  toggleCartMenu(): void {
    this.menuService.toggleCartMenu();
    console.log('Abriendo cart menu');
  }
}
