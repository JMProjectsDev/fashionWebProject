import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert, AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  arrivals = new Array(24).fill(0);
  alert: Alert | null = null;
  alertVisible = false;
  formVisible = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Suscribirse a las alertas
    this.subscriptions.add(
      this.alertService.alert$.subscribe((alert) => {
        this.alert = alert;
        this.alertVisible = !!alert;
      })
    );

    // Suscribirse a la visibilidad del formulario
    this.subscriptions.add(
      this.authService.formVisible$.subscribe((formVisible) => {
        this.formVisible = formVisible;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  cerrarAlerta(): void {
    this.alertService.ocultarAlerta();
  }

  cerrarFormularioAuth(): void {
    this.authService.ocultarFormulario();
  }
}
