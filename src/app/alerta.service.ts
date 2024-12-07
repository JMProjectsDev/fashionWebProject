import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alerta {
  mensaje: string;
  tipo: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  private alertaSubject = new BehaviorSubject<Alerta | null>(null);

  alerta$ = this.alertaSubject.asObservable();

  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info'): void {
    this.alertaSubject.next({ mensaje, tipo });
    setTimeout(() => this.ocultarAlerta(), 5000);
  }

  ocultarAlerta(): void {
    this.alertaSubject.next(null);
  }
}
