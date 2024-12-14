import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      // Error si las contraseñas no coinciden.
      return { passwordsDontMatch: true };
    }
    // No hay error si coinciden o aún no se ha introducido.
    return null;
  };
}
