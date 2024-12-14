import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert, AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  arrivals = new Array(24).fill(0);
  alert: Alert | null = null;
  alertVisible = false;
  sideMenuVisible: boolean = false;
  formVisible: boolean = false;
  subscription!: Subscription;

  constructor(
    private menuService: MenuService,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((alert) => {
      if (alert) {
        this.alert = alert;
        setTimeout(() => (this.alertVisible = true), 10);
        setTimeout(() => this.ocultarAlerta(), 5000);
      }
    });

    this.subscription = this.authService.formVisible$.subscribe(
      (formVisible) => {
        this.formVisible = formVisible;
      }
    );

    this.subscription = this.menuService.isOpen$.subscribe(
      (sideMenuVisible) => {
        this.sideMenuVisible = sideMenuVisible;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ocultarAlerta(): void {
    this.alertVisible = false;
    setTimeout(() => (this.alert = null), 300);
  }

  cerrarAlerta(): void {
    this.ocultarAlerta();
  }
}
