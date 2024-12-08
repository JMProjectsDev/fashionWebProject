import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm: FormGroup;
  isRegister = false;
  closing = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {    
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
    });
  }

  cerrarFormulario(): void {
    this.closing = true;    
    setTimeout(() => {
      this.authService.ocultarFormulario();
      this.closing = false; // Reinicia el estado después del cierre
    }, 300); 
  }
  

  detenerCierre(event: Event): void {
    event.stopPropagation();
  }

  toggleRegister(): void {
    this.isRegister = !this.isRegister;

    // Configura la validación del campo confirmPassword según el modo
    if (this.isRegister) {
      this.authForm.get('confirmPassword')?.setValidators([
        Validators.required,
        Validators.minLength(6),
      ]);
    } else {
      this.authForm.get('confirmPassword')?.clearValidators();
    }
    this.authForm.get('confirmPassword')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      const { email, password, confirmPassword } = this.authForm.value;
      if (this.isRegister) {
        console.log('Registro:', { email, password, confirmPassword });
      } else {
        console.log('Login:', { email, password });
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  loginWithGoogle(): void {
    console.log('Iniciar sesión con Google');
    // Aquí iría la integración con el SDK de Google
  }
}
