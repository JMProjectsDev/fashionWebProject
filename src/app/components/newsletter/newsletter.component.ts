import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  formulario: FormGroup;
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

  checkEmail() {
    if (this.formulario.valid) {
      //enviar datos backend
      this.registroExitoso = true
      console.log('Email correcto!');
    } else {
      //controlar errores
      this.registroExitoso = false
      console.log('Email incorrecto!');
    }

    Object.values(this.formulario.controls).forEach((control) =>
      control.markAsTouched()
    );
  }
}
