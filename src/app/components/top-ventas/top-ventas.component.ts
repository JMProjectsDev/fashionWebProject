import { ViewChild, AfterViewInit, Component } from '@angular/core';
import { Products, ProductsData } from 'src/app/products';
import * as data from '../../../assets/mockdata.json';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// Instalar módulos de Swiper que se usarán
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-top-ventas',
  templateUrl: './top-ventas.component.html',
  styleUrls: ['./top-ventas.component.css'],
})
export class TopVentasComponent implements AfterViewInit {
  @ViewChild(SwiperComponent) swiperComponent!: SwiperComponent;

  ngAfterViewInit() {
    // Forzar la actualización de Swiper después de que la vista se inicialice
    if (this.swiperComponent && this.swiperComponent.swiperRef) {
      this.swiperComponent.swiperRef.update();
    }
  }

  top_ventas: ProductsData = data;

  get productosArray() {
    return this.top_ventas.top_ventas
      ? Object.keys(this.top_ventas.top_ventas).map(
          (key) => this.top_ventas.top_ventas[key]
        )
      : [];
  }

  slideConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 5, // Asegúrate de que este valor no sea demasiado grande.
    navigation: true,
    pagination: {
      clickable: true,
    },
    // otras configuraciones...
  };
}
