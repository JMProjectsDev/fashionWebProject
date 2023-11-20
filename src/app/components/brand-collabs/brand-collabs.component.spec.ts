import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCollabsComponent } from './brand-collabs.component';

describe('BrandCollabsComponent', () => {
  let component: BrandCollabsComponent;
  let fixture: ComponentFixture<BrandCollabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandCollabsComponent]
    });
    fixture = TestBed.createComponent(BrandCollabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
