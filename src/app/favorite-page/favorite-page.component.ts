import { Component, OnInit } from '@angular/core';
import { DataService } from '../home-page/data.service';

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
export class FavoritePageComponent implements OnInit {
  
  data!: any[];
  constructor(private dataService: DataService) {
    this.data = this.dataService.favoriteList;
   }
  
  ngOnInit(): void {

  }
  

  

  

}
