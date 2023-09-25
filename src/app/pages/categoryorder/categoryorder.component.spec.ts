import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryorderComponent } from './categoryorder.component';

describe('CategoryorderComponent', () => {
  let component: CategoryorderComponent;
  let fixture: ComponentFixture<CategoryorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
