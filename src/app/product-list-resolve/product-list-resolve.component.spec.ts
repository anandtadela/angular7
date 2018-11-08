import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListResolveComponent } from './product-list-resolve.component';

describe('ProductListResolveComponent', () => {
  let component: ProductListResolveComponent;
  let fixture: ComponentFixture<ProductListResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
