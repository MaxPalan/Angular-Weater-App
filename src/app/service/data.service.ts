import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface currData {
  currCity?: string;
  currTemp?: number;
  currWeather?: string;
  currCityKey?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  inputValue!: string;
  
  currentCityKey: any;

  favoriteList: Array<currData> = [];

  chosenFromFavorite: any;
  
  constructor(private http: HttpClient) { }

  getKyivCity() {
    return this.http.get("http://dataservice.accuweather.com/currentconditions/v1/324505?apikey=7zZ89NxFbybbE7OO3YAdAHnQ5LT9uVH3&language=en&details=false");
  }
  getFiveDaysOfKyiv() {
    return this.http.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505?apikey=7zZ89NxFbybbE7OO3YAdAHnQ5LT9uVH3&language=en&metric=true");
  }
  getCityList() {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=7zZ89NxFbybbE7OO3YAdAHnQ5LT9uVH3&q=${this.inputValue}&language=en`);
  }
  getChosenCity() {
    return this.http.get(`http://dataservice.accuweather.com/currentconditions/v1/${this.currentCityKey}?apikey=7zZ89NxFbybbE7OO3YAdAHnQ5LT9uVH3&language=en&details=false`);
  }
  getFiveDaysOfChosenCity() {
    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.currentCityKey}?apikey=7zZ89NxFbybbE7OO3YAdAHnQ5LT9uVH3&language=en&metric=true`);
  }
}
