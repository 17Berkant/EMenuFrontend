import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductslayoutComponent } from './productslayout.component';

describe('ProductslayoutComponent', () => {
  let component: ProductslayoutComponent;
  let fixture: ComponentFixture<ProductslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductslayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
