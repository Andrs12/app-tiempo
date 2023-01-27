import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private httpClient: HttpClient) {}

  getCities(): any {
    return this.httpClient.get('/assets/cities.json');
  }

  getFavoritesCities(): any{
    let favoriteCitiesCities = [];
    if (sessionStorage.getItem('favoriteCities') != null) {
      favoriteCitiesCities = JSON.parse(sessionStorage['favoriteCities']);
    }
    return favoriteCitiesCities;
  }



}
