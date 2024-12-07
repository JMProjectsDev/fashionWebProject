import { Component, OnInit } from '@angular/core';
import { Alerta, AlertaService } from 'src/app/alerta.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  arrivals = new Array(24).fill(0);
  alerta: Alerta | null = null;
  
  constructor(private alertaService: AlertaService) {}

  ngOnInit(): void {
    this.alertaService.alerta$.subscribe((alerta) => {
      this.alerta = alerta;
    });
  }

  cerrarAlerta(){
    this.alertaService.ocultarAlerta();
  }
}
