import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:5000';
  private userToken = new BehaviorSubject<string | null>(null);
  private formVisibleSubject = new BehaviorSubject<boolean>(false);
  formVisible$ = this.formVisibleSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.loadToken();
  }

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

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.userToken.next(token);
  }

  private loadToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userToken.next(token);
    }
  }

  getToken(): Observable<string | null> {
    return this.userToken.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<{ token: string }>(`${this.backendUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          if (response.token) {
            this.saveToken(response.token);
          }
        })
      );
  }

  register(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.backendUrl}/auth/register`, { email, password })
      .pipe(tap((response) => console.log('Respuesta del backend:', response)));
  }

  loginWithGoogle(): void {
    window.location.href = `${this.backendUrl}/google`;
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('token', token);
    return this.http.get(`${this.backendUrl}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userToken.next(null);
    this.router.navigate(['/']);
  }
}
