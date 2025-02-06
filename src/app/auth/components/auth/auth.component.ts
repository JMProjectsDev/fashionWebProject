import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { passwordsMatchValidator } from '../../validators/passwordsMatchValidators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm: FormGroup;
  isRegister = false;
  closing = false;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.authForm = this.fb.group(
      {
        email: [
          '',
          {
            validators: [
              Validators.required,
              Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
            ],
            updateOn: 'submit',
          },
        ],
        password: [
          '',
          {
            validators: [Validators.required],
            updateOn: 'submit',
          },
        ],
        confirmPassword: ['', { updateOn: 'submit' }],
      },
      {
        validators: [passwordsMatchValidator()],
      }
    );

    this.route.queryParams.subscribe((params) => {
      if (params['token']) {
        this.authService.saveToken(params['token']);
      }
    });
  }

  cerrarFormulario(): void {
    this.closing = true;
    setTimeout(() => {
      this.authService.ocultarFormulario();
      this.closing = false;
    }, 300);
  }

  detenerCierre(event: Event): void {
    event.stopPropagation();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleRegister(): void {
    this.isRegister = !this.isRegister;
    const password = this.authForm.get('password');
    const confirmPassword = this.authForm.get('confirmPassword');

    if (this.isRegister) {
      password?.setValidators([Validators.required, Validators.minLength(6)]);
      confirmPassword?.setValidators([
        Validators.required,
        Validators.minLength(6),
      ]);
    } else {
      password?.setValidators([Validators.required]);
      confirmPassword?.clearValidators();
      confirmPassword?.reset();
      this.authForm.setErrors(null);
    }

    password?.updateValueAndValidity();
    confirmPassword?.updateValueAndValidity();
  }

  checkCredentials(email: string, password: string, confirmPassword: string) {
    if (this.authForm.valid) {
      if (this.isRegister) {
        if (password !== confirmPassword) {
          console.log('Las contraseñas no coinciden');
        } else {
          this.authService.register(email, password).subscribe({
            next: () => alert('Registro exitoso, ahora puedes iniciar sesión.'),
            error: (err) => alert(err.error.msg || 'Error en el registro'),
          });
        }
      } else {
        this.authService.login(email, password).subscribe({
          next: () => alert('Inicio de sesión exitoso'),
          error: (err) =>
            alert(err.error.msg || 'Error en el inicio de sesión'),
        });
      }
      this.authForm.reset();
    } else {
      console.log('Formulario inválido');
      Object.values(this.authForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }
}
