import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionRegistrosComponent } from './visualizacion-registros.component';
import { HttpClientModule } from '@angular/common/http';


describe('VisualizacionRegistrosComponent', () => {
  let component: VisualizacionRegistrosComponent;
  let fixture: ComponentFixture<VisualizacionRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionRegistrosComponent ],
      imports: [ HttpClientModule ] // agrega esta línea

    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
