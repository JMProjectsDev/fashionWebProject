import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
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
      confirmPassword: [
        '',
        {          
          updateOn: 'submit',
        },
      ],
    },{
      validators: [passwordsMatchValidator()]
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

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(){
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleRegister(): void {
    this.isRegister = !this.isRegister;
    const password = this.authForm.get('password');
    const confirmPassword = this.authForm.get('confirmPassword');
  
    if (this.isRegister) {
      password?.setValidators([Validators.required, Validators.minLength(6)]);
      confirmPassword?.setValidators([Validators.required, Validators.minLength(6)]);
    } else {
      password?.setValidators([Validators.required]); //Si se limpian los validators no funciona al cambiar entre login y registro.
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
        if(password != confirmPassword){
          console.log('Las contraseñas no coinciden');
        } else {
          console.log('Registro:', { email, password, confirmPassword });          
        }
        
      } else {
        console.log('Login:', { email, password });
      }
      // Resetear el formulario pero no limpiar explícitamente los errores
      this.authForm.reset();
    } else {      
      console.log('Formulario inválido');
      Object.values(this.authForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  loginWithGoogle(): void {
    console.log('Iniciar sesión con Google');
    // Aquí iría la integración con el SDK de Google
  }
}
