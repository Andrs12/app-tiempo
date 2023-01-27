import { Component } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { TimeService } from '../services/time.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.sass'],
})
export class TiempoComponent {
  searchInput = '';
  cities: any;
  citesSearch: any;
  favoriteCities: any;
  timeData:any;
  timeIconURL: string | undefined;
  degrees: string | undefined;
  showTime = false;
  zoom = 12;
  center;
  marker:any;
  options = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };


  constructor(private citiesService: CitiesService, private timeService: TimeService) {
    this.center = {
      lat: 0,
      lng: 0,
    };
  }

  ngOnInit() {
    this.citiesService.getCities().subscribe((data: any) => {
      let cities = JSON.parse(JSON.stringify(data));
      this.cities = data;
      this.favoriteCities = this.citiesService.getFavoritesCities();
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    });

  }

  search(event:any) {
    this.citesSearch = this.timeService.searchCities(
      this.searchInput,
      this.cities
    );
  }

  addCityToFavorite(city: any) {
    let isFavorite = false;

    this.favoriteCities.forEach((cityFavorite: any) => {
      if (cityFavorite.id == city.id) {
        isFavorite = true;
      }
    });
    if (isFavorite) {
      alert('This city is already in your favorite list');
    } else {
      this.favoriteCities.push(city);
      sessionStorage.setItem('favoriteCities',JSON.stringify(this.favoriteCities));
    }
}

  deleteCityFavorite(city:any){
    let hasChanges = false
    this.favoriteCities.forEach( (cityFavorite: any, i: number) => {
      if (cityFavorite.id == city.id) {
        this.favoriteCities.splice(i,1);
        hasChanges = true
      }
  });
  if(hasChanges) sessionStorage.setItem('favoriteCities',JSON.stringify(this.favoriteCities));
  }

  getCityTime(id: string){
  this.timeService.getCityTime(id).subscribe( (data) => {
    this.timeData = data;
    this.timeIconURL = this.timeService.getWeatherIcon(this.timeData.weather[0].icon);
    this.degrees = this.timeData.main.temp;
    this.showTime = true;
    this.center = {
      lat: this.timeData.coord.lat,
      lng: this.timeData.coord.lon,
    };
    this.addMarker(this.timeData.coord.lat,this.timeData.coord.lon,this.timeData.name)
  });
  }

  getIcon(idIcon: string){
    this.timeService.getWeatherIcon(idIcon);
  }

  addMarker(lat: number, lng: number,text:string) {
    this.marker= {
      position: {
        lat: lat,
        lng: lng
      },
      label: {
        color: 'red',
        text: text,
      },
      title: text
    };
  }

}


