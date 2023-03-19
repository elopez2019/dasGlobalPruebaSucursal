import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';


describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DatabaseService ],
      imports: [ HttpClientModule ] // agrega esta línea
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
