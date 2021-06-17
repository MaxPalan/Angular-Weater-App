import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

interface currData {
  currCity?: string;
  currTemp?: number;
  currWeather?: string;
  currCityKey?: string;
}

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {
  
  favoriteList!: currData[];

  constructor(private dataService: DataService) {
    this.favoriteList = this.dataService.favoriteList;
   }
  
  ngOnInit(): void {

  }
  
  setChosenCity(currCity: currData) {                           //data fo render chosen city from favorite list

    this.dataService.chosenFromFavorite = this.dataService.favoriteList.find(city => city === currCity)
    console.log(this.dataService.chosenFromFavorite);
  }
  

  

}
