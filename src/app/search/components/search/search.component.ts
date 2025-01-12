import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchForm: FormGroup;

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
