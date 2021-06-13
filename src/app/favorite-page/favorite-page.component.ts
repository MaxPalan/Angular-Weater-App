import { Component } from '@angular/core';

let favoriteData: any[] = [];
favoriteData = [
  {
    name: 'London',
    temp: 5,
    weather: 'Sunny'
  },
  {
    name: 'Madrid',
    temp: 12,
    weather: 'Rainy'
  },
  {
    name: 'Paris',
    temp: 11,
    weather: 'Cloudy'
  },
  {
    name: 'Kiev',
    temp: 9,
    weather: 'Sunny'
  }
]

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent {

  constructor() { }

  data = favoriteData;

}
