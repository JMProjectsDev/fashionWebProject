import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  checkEmail() {
    if (this.formulario.valid) {
      console.log('Email correcto!');
    } else {
      console.log('Email incorrecto!');
    }

    Object.values(this.formulario.controls).forEach(
      (control) => control.markAsTouched
    );
  }
}
