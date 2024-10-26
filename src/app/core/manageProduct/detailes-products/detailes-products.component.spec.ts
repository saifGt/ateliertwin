import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesProductsComponent } from './detailes-products.component';

describe('DetailesProductsComponent', () => {
  let component: DetailesProductsComponent;
  let fixture: ComponentFixture<DetailesProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailesProductsComponent]
    });
    fixture = TestBed.createComponent(DetailesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
