import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CitiesService } from '../services/cities.service'
import { TiempoComponent } from './tiempo.component';

describe('TiempoComponent', () => {
  let httpClient: HttpClient;
  let forms: FormsModule;
  let httpTestingController: HttpTestingController;
  let ctrl: TiempoComponent;
  let fixture: ComponentFixture<TiempoComponent>;
  let citieSrv:CitiesService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempoComponent ],
      imports: [ HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
    citieSrv = new CitiesService(httpClient);
    fixture = TestBed.createComponent(TiempoComponent);
    ctrl = fixture.componentInstance;
    fixture.detectChanges();
  });



});
