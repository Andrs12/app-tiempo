import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient: HttpClient) { }

  searchCities(cityNameToFind: string, citiesList:any) {
    let cityReturnList: any[] = [];
    citiesList.forEach((city: any) => {
      if (city.name.toLowerCase().includes(cityNameToFind.toLowerCase())) {
        cityReturnList.push(city);
      }
    });
    return cityReturnList;
  }

  getCityTime(id: string){
    let appId = '5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b';
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?id='+id+'&appid='+appId+'&units=metric');
  }

  getWeatherIcon(iconCode: string){
    return 'http://openweathermap.org/img/wn/'+iconCode+'@2x.png'
  }

}
