import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[CategoryService]
    });
   // service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    const service: CategoryService = TestBed.get(CategoryService)
    expect(service).toBeTruthy();
  });
  it('should have getCategory function', () => {
    const service: CategoryService = TestBed.get(CategoryService);
    expect(service.getCategory).toBeTruthy();
   });
   it('should have getFood function', () => {
    const service: CategoryService = TestBed.get(CategoryService);
    expect(service.getFood).toBeTruthy();
   });
});
