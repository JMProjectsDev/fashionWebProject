import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  formulario: FormGroup;
  email: string = '';
  registroExitoso: Boolean = false;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
    });
  }

  checkEmail(email: string) {
    if (this.formulario.valid && email !== null) {
      console.log('Email correcto!');
      this.registroExitoso = true;
      // Enviar datos al backend...

      // Resetear el formulario pero no limpiar explícitamente los errores
      this.formulario.reset();
    } else {
      console.log('Email incorrecto!');
      this.registroExitoso = false;
    }

    // Marcar como 'touched' solo si el formulario es inválido para mostrar errores
    if (this.formulario.invalid) {
      Object.values(this.formulario.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
