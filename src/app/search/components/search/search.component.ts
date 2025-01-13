import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsData } from 'src/app/shared/interfaces/products';
import data from '../../../../assets/mockdata.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchForm: FormGroup;

  top_ventas: ProductsData = data;

  get productosArray() {
    return this.top_ventas.top_ventas
      ? Object.keys(this.top_ventas.top_ventas).map(
          (key) => this.top_ventas.top_ventas[key]
        )
      : [];
  }

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required]],
    });

    this.searchForm.valueChanges.subscribe(() => {
      console.log('Valor de búsqueda:', this.searchForm.get('searchTerm')?.value);
    });
  }

  performSearch() {
    if (this.searchForm.valid) {
      const searchTerm = this.searchForm.get('searchTerm')?.value;

      console.log(`Realizando búsqueda por: ${searchTerm}`);
    }
  }

  clearSearch() {
    this.searchForm.reset();
  }
}
