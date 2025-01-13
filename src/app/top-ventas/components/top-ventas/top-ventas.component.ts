import { ViewChild, AfterViewInit, Component } from '@angular/core';
import { ProductsData } from 'src/app/shared/interfaces/products';
import data from '../../../../assets/mockdata.json';
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
    spaceBetween: 30,
    navigation: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      // Cuando la pantalla es >= 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      270: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      // Cuando la pantalla es >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // Cuando la pantalla es >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      912: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // Cuando la pantalla es >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // Cuando la pantalla es >= 1280px
      1280: {
        slidesPerView: 3,
        spaceBetween: 0,
      },

      // Cuando la pantalla es >= 1280px
      1440: {
        slidesPerView: 4,
        spaceBetween: -60,
      },
    },
  };
}
