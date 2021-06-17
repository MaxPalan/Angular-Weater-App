import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';

interface currData {
  currCity?: string;
  currTemp?: number;
  currWeather?: string;
  currCityKey?: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  
  @ViewChild('input') input: any;
  @ViewChild('select') select: any;

  condition: boolean = true;                                          //css class status of <select>
  status: boolean = true;                                             //css class status of icon for added city

  inputValue!: string;
  selectValue!: string;

  ourCityData!: any[];                                                //data of displayed city
  currentCityData!: currData;

  currentCityFiveDayData: any;

  dayName: any[] = [];                                                //getting date & day name fo 5 day forecasts
  years: any[] = [];
  month: any[] = [];
  days: any[] = [];

  currentCityFiveDayMetric: any[] = [];
  currentDayDate: any[] = [];
  
  currentCityFiveDayRenderData: any[] = [];                           //data for rendering 5 day forecasts

  requestedCityList: any[] = [];                                      //data of requested cities
  requestedCityData: any[] = [];

  findedCity: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {                                                  //checking of added city
    this.dataService.favoriteList.forEach(city => {
      if (this.currentCityData.currCity === city.currCity) {
        this.status = false;
      } else {
        this.status = true;
      }
    })

    this.dataService.getKyivCity().subscribe((ourCityData: any) => {                //getting current weather in Kyiv

      this.ourCityData = ourCityData;

      this.currentCityData = {
        currCity: 'Kyiv',
        currTemp: ourCityData[0].Temperature.Metric.Value,
        currWeather: ourCityData[0].WeatherText,
        currCityKey: '324505'
      }
    })

    this.dataService.getFiveDaysOfKyiv().subscribe((kyivFiveDayData: any) => {  //getting DailyForecasts for 5 days in Kyiv

      this.currentCityFiveDayData = kyivFiveDayData;
                                                        //The logic below is used to get up-to-date weather data for 5 days
      this.currentCityFiveDayData.DailyForecasts.forEach((forecast: any) => {
        this.currentCityFiveDayMetric.push(forecast.Temperature.Maximum.Value);
        this.currentDayDate.push(forecast.Date.substr(0, 10).split('').filter((x: string) => x !== '-').join(''));
      })
                                                        //separatig date for years, monthes & days
      this.currentDayDate.forEach(date => {                                        
        this.years.push(+(date.slice(0, 4)));
        this.month.push(+(date.slice(4, 6)) - 1);
        this.days.push(+(date.slice(6)));
      })
                                                              //getting actual 5 days from now
      for (let i = 0; i < this.currentDayDate.length; i++) {
        const getWeekDay = (date: Date) => {
          let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          this.dayName.push(days[date.getDay()]);
          return days[date.getDay()];
        }
        let date = new Date(this.years[i], this.month[i], this.days[i]);
        getWeekDay(date);
      }
                                                              //set actual FiveDayRenderData
      for (let i = 0; i < this.currentDayDate.length; i++) {
        this.currentCityFiveDayRenderData.push({
          metric: this.currentCityFiveDayMetric[i],
          day: this.dayName[i]
        })
      }
    });
  }
  
  showCityList() {
    this.dataService.inputValue = this.inputValue;                        //for requestedCityList & requestedCityData

    this.dataService.getCityList().subscribe((res: any) => {

      this.requestedCityList = res;
      
      this.requestedCityList.forEach(city => {
        this.requestedCityData.push({
          Key: city.Key,
          LocalizedName: city.LocalizedName,
          Country: city.Country.LocalizedName,
          LocalizedCityName: city.AdministrativeArea.LocalizedName
        });
      })

      this.condition = false;
    })
  }

  chosenCity() {                                                      //changing currentCityData for render
    this.inputValue = this.selectValue;

    this.findedCity = this.requestedCityData.find(city => {
      return city.LocalizedCityName === this.selectValue;
    })

    this.dataService.currentCityKey = this.findedCity.Key;
    
    this.dataService.getChosenCity().subscribe((res: any) => {
      this.ourCityData = res;

      this.currentCityData = {
        currCity: this.selectValue,
        currTemp: res[0].Temperature.Metric.Value,
        currWeather: res[0].WeatherText,
        currCityKey: this.findedCity.Key
      }
    })

    this.dataService.getFiveDaysOfChosenCity().subscribe((chosenCityFiveDayData: any) => {  
                                                                //getting DailyForecasts for 5 days in chosen city, the code is repeated as in ngOnInit, but some values ​​are reset
      this.currentCityFiveDayData = chosenCityFiveDayData;

      this.currentCityFiveDayMetric = [];
      this.currentDayDate = [];

      this.currentCityFiveDayData.DailyForecasts.forEach((forecast: any) => {
        
        this.currentCityFiveDayMetric.push(forecast.Temperature.Maximum.Value);
        
        this.currentDayDate.push(forecast.Date.substr(0, 10).split('').filter((x: string) => x !== '-').join(''));
      })
      
      this.years = [];
      this.month = [];
      this.days = [];

      this.currentDayDate.forEach(date => {
       
        this.years.push(+(date.slice(0, 4)));
        this.month.push(+(date.slice(4, 6)) - 1);
        this.days.push(+(date.slice(6)));
      
      })
      
      this.dayName = [];

      for (let i = 0; i < this.currentDayDate.length; i++) {
        const getWeekDay = (date: Date) => {
          let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          this.dayName.push(days[date.getDay()]);
          return days[date.getDay()];
        }
        let date = new Date(this.years[i], this.month[i], this.days[i]);
        getWeekDay(date);
      }
      
      this.currentCityFiveDayRenderData = [];

      for (let i = 0; i < this.currentDayDate.length; i++) {
        this.currentCityFiveDayRenderData.push({
          metric: this.currentCityFiveDayMetric[i],
          day: this.dayName[i]
        })
      }
    });
  }

  addThisCity() {                            //adding/deleting chosen city to favorite & changing icon for added city
    
    if (this.dataService.favoriteList.find(d => d.currCity === this.currentCityData.currCity)) {
      this.dataService.favoriteList = this.dataService.favoriteList.filter(city => city.currCity !== this.currentCityData.currCity);
    }
    else {
      this.dataService.favoriteList.push(this.currentCityData);
    }

    this.dataService.favoriteList.forEach(city => {
      if (this.currentCityData.currCity === city.currCity) {
        this.status = false;
      } else {
        this.status = true;
      }
    })
  }
}
