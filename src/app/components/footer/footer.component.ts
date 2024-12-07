import { Component } from '@angular/core';
import data from '../../../assets/mockdata.json';
import { MetodosPagoData } from 'src/app/metodosPago';
import { RedesData } from 'src/app/redes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  metodos_pago: MetodosPagoData = data;
  redes: RedesData = data;

  get metodosArray() {
    return this.metodos_pago.metodos_pago
      ? Object.keys(this.metodos_pago.metodos_pago).map(
          (key) => this.metodos_pago.metodos_pago[key]
        )
      : [];
  }

  get redesArray(){
    return this.redes.redes
    ? Object.keys(this.redes.redes).map((key)=> this.redes.redes[key]) :
    [];
  }
}
