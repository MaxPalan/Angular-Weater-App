import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';

interface currData {
  currCity?: string;
  currTemp?: number;
  currWeather?: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  
  @ViewChild('input') input: any;
  @ViewChild('select') select: any;

  condition: boolean = true;
  status: boolean = true;

  inputValue!: string;
  selectValue!: string;

  // cityList!: string[];

  ourCityData!: any[];
  currentCityData!: currData;

  currentCityFiveDayData: any;

  dayName: any[] = [];
  years: any[] = [];
  month: any[] = [];
  days: any[] = [];

  currentCityFiveDayMetric: any[] = [];
  currentDayDate: any[] = [];
  
  currentCityFiveDayRenderData: any[] = [];

  requestedCityList: any[] = [];
  requestedCityData: any[] = [];

  findedCity: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getKyivCity().subscribe((ourCityData: any) => {                //getting current weather in Kyiv

      this.ourCityData = ourCityData;

      this.currentCityData = {
        currCity: 'Kyiv',
        currTemp: ourCityData[0].Temperature.Metric.Value,
        currWeather: ourCityData[0].WeatherText
      }
    })

    this.dataService.getFiveDaysOfKyiv().subscribe((kyivFiveDayData: any) => {  //getting DailyForecasts for 5 days in Kyiv

      this.currentCityFiveDayData = kyivFiveDayData;

      this.currentCityFiveDayData.DailyForecasts.forEach((d: any) => {
        this.currentCityFiveDayMetric.push(d.Temperature.Maximum.Value);
        this.currentDayDate.push(d.Date.substr(0, 10).split('').filter((x: string) => x !== '-').join(''));
      })

      this.currentDayDate.forEach(d => {
        this.years.push(+(d.slice(0, 4)));
        this.month.push(+(d.slice(4, 6)) - 1);
        this.days.push(+(d.slice(6)));
      })

      for (let i = 0; i < this.currentDayDate.length; i++) {
        const getWeekDay = (date: Date) => {
          let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          this.dayName.push(days[date.getDay()]);
          return days[date.getDay()];
        }
        let date = new Date(this.years[i], this.month[i], this.days[i]);
        getWeekDay(date);
      }

      for (let i = 0; i < this.currentDayDate.length; i++) {
        this.currentCityFiveDayRenderData.push({
          metric: this.currentCityFiveDayMetric[i],
          day: this.dayName[i]
        })
      }
    });
    

    this.dataService.favoriteList.forEach(d => {
      if (this.currentCityData.currCity === d.currCity) {
        this.status = false;
      }
    })
  }

  // showCityList() {
  //   this.input.focused = true;
  //   if (this.inputValue !== '' || this.inputValue !== undefined) {
  //     this.condition = false;
  //     this.cityList = this.cityList.filter((city) => {
  //       return city.toLocaleLowerCase().startsWith(this.inputValue.toLocaleLowerCase());
  //     })
  //   }
  // }
  // hideCityList() {
  //   this.input.focused = false;
  //   if ((this.input.focused === false && this.inputValue === undefined) || (this.input.focused === false && this.inputValue === '')) {
  //     this.condition = true;
  //   }
  // }
  
  showCityList() {
    this.dataService.inputValue = this.inputValue;
    this.condition = true;
    
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
    // this.ourData = {
    //   currCity: this.selectValue,
    //   currTemp: 12,
    //   currWeather: 'Mostly clear'
    // }
    // this.dataService.favoriteList.forEach(d => {
    //   if (this.ourData.currCity === d.currCity) {
    //     this.status = false;
    //   } else {
    //     this.status = true;
    //   }
    // })
    // this.inputValue = '';
  }

  chosenCity() {
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
        currWeather: res[0].WeatherText
      }
    })

    this.dataService.getFiveDaysOfChosenCity().subscribe((chosenCityFiveDayData: any) => {  
                                                                        //getting DailyForecasts for 5 days in chosen city

      this.currentCityFiveDayData = chosenCityFiveDayData;
      this.currentCityFiveDayMetric = [];
      this.currentDayDate = [];
      this.currentCityFiveDayData.DailyForecasts.forEach((d: any) => {
        
        this.currentCityFiveDayMetric.push(d.Temperature.Maximum.Value);
        
        this.currentDayDate.push(d.Date.substr(0, 10).split('').filter((x: string) => x !== '-').join(''));
      })
      
      this.years = [];
      this.month = [];
      this.days = [];
      this.currentDayDate.forEach(d => {
       
        this.years.push(+(d.slice(0, 4)));
        this.month.push(+(d.slice(4, 6)) - 1);
        this.days.push(+(d.slice(6)));
      
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

  addThisCity() {
    this.dataService.favoriteList.push(this.currentCityData);
    this.dataService.favoriteList.forEach(d => {
      if (this.currentCityData.currCity === d.currCity) {
        this.status = false;
      } else {
        this.status = true;
      }
    })
  }
}
