import { trigger, transition, style, animate } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  // Transición para deslizar desde la izquierda
  transition('* => left', [
    style({ transform: 'translateX(-50%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  // Transición para deslizar desde la derecha
  transition('* => right', [
    style({ transform: 'translateX(50%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);
