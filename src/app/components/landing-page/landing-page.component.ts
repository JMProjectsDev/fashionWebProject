import { Component, OnInit } from '@angular/core';
import { Alert, AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  arrivals = new Array(24).fill(0);
  alert: Alert | null = null;
  alertVisible = false;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((alert) => {
      if (alert) {
        this.alert = alert;
        setTimeout(() => (this.alertVisible = true), 10);
        setTimeout(() => this.ocultarAlerta(), 5000);
      }
    });
  }

  ocultarAlerta(): void {
    this.alertVisible = false;
    setTimeout(() => (this.alert = null), 300);
  }

  cerrarAlerta(): void {
    this.ocultarAlerta();
  }
}
