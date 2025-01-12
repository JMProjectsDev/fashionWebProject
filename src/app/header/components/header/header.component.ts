import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/shared/services/menu.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSearchRoute: boolean = false;
  scrolled = false;
  scrollEnabled = true;

  private subscriptions: Subscription = new Subscription();

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
    this.subscriptions.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isSearchRoute = this.router.url.includes('/search');
          this.scrollEnabled = !this.isSearchRoute;
          if (this.isSearchRoute) {
            this.scrolled = false;
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleSideMenu(): void {
    this.menuService.toggleSideMenu();
    console.log('Menú lateral abierto/cerrado');
  }

  toggleCartMenu(): void {
    this.menuService.toggleCartMenu();
    console.log('Carrito abierto/cerrado');
  }

  formularioAuth(): void {
    this.authService.mostrarFormulario();
    console.log('Formulario de inicio de sesión solicitado');
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }
}
