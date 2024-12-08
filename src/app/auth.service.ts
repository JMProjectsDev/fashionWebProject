import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private formVisibleSubject = new BehaviorSubject<boolean>(false);
  formVisible$ = this.formVisibleSubject.asObservable();

  constructor() {}

  mostrarFormulario(): void {
    this.formVisibleSubject.next(true);
  }

  ocultarFormulario(): void {
    this.formVisibleSubject.next(false);
  }

  toggleFormulario(): void {
    const currentState = this.formVisibleSubject.value;
    this.formVisibleSubject.next(!currentState);
  }
}
