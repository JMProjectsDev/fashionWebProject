import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {  
  formulario: FormGroup; 
  
  constructor(private fb: FormBuilder, private alertService: AlertService) {
    this.formulario = this.fb.group({
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
    });
  }

  checkEmail(email: string) {
    if (this.formulario.valid) {
      console.log('Email correcto!', email);
      this.alertService.mostrarAlerta('Si la dirección de email existe, recibirás un correo de confirmación pronto. ¡Gracias!', 'success');
      // Enviar datos al backend...

      // Resetear el formulario pero no limpiar explícitamente los errores
      this.formulario.reset();
    } else {
      console.log('Email incorrecto!');      
      Object.values(this.formulario.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
