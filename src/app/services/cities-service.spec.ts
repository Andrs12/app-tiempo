import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CitiesService } from './cities.service';


describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    imports: [HttpClientTestingModule]
    service = TestBed.inject(CitiesService);
  });

  describe("getCities", () => {
    it("getCities", () => {
      const ctrl = TestBed.createComponent(CitiesService);

    });
  });

});
