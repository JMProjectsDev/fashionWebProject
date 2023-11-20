import { Component } from '@angular/core';
import { Products, ProductsData } from 'src/app/products';
import * as data from '../../../assets/mockdata.json';

@Component({
  selector: 'app-top-ventas',
  templateUrl: './top-ventas.component.html',
  styleUrls: ['./top-ventas.component.css'],
})
export class TopVentasComponent {
  top_ventas: ProductsData = data;

  get productosArray() {
    return this.top_ventas.top_ventas
      ? Object.keys(this.top_ventas.top_ventas).map(
          (key) => this.top_ventas.top_ventas[key]
        )
      : [];
  }
}
