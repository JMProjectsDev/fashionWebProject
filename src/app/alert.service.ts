import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alert {
  mensaje: string;
  tipo: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert | null>(null);

  alert$ = this.alertSubject.asObservable();

  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info'): void {
    this.alertSubject.next({ mensaje, tipo });
    setTimeout(() => this.ocultarAlerta(), 5000);
  }

  ocultarAlerta(): void {
    this.alertSubject.next(null);
  }
}
