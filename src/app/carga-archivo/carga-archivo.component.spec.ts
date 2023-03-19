import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaArchivoComponent } from './carga-archivo.component';
import { HttpClientModule } from '@angular/common/http';


describe('CargaArchivoComponent', () => {
  let component: CargaArchivoComponent;
  let fixture: ComponentFixture<CargaArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaArchivoComponent ],
      imports: [ HttpClientModule ] // agrega esta línea
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
