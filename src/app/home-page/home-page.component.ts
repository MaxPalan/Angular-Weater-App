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

  condition: boolean = true;
  status: boolean = true;

  inputValue!: string;
  selectValue!: string;

  cityList!: string[];

  ourData!: any[];
  currData!: currData;

  kyivFiveDayData: any;

  dayName: any[] = [];
  years: any[] = [];
  month: any[] = [];
  days: any[] = [];

  kyivFiveDayMetric: any[] = [];
  kyivDayDate: any[] = [];
  
  kyivFiveDayRenderData: any[] = [];

  constructor(private dataService: DataService) {
    this.cityList = this.dataService.cityName;
    this.inputValue = this.dataService.inputValue;
  }

  ngOnInit(): void {
    this.dataService.getKyivCity().subscribe((ourData: any) => {                //getting current weather in Kyiv

      this.ourData = ourData;

      this.currData = {
        currCity: 'Kyiv',
        currTemp: ourData[0].Temperature.Metric.Value,
        currWeather: ourData[0].WeatherText
      }
    })

    this.dataService.getFiveDaysOfKyiv().subscribe((kyivFiveDayData: any) => {  //getting DailyForecasts for 5 days in Kyiv

      this.kyivFiveDayData = kyivFiveDayData;

      this.kyivFiveDayData.DailyForecasts.forEach((d: { Temperature: { Maximum: { Value: any; }; }; Date: string; }) => {
        this.kyivFiveDayMetric.push(d.Temperature.Maximum.Value);
        this.kyivDayDate.push(d.Date.substr(0, 10).split('').filter((x: string) => x !== '-').join(''));
      })

      this.kyivDayDate.forEach(d => {
        this.years.push(+(d.slice(0, 4)));
        this.month.push(+(d.slice(4, 6)) - 1);
        this.days.push(+(d.slice(6)));
      })

      for (let i = 0; i < this.kyivDayDate.length; i++) {
        const getWeekDay = (date: Date) => {
          let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          this.dayName.push(days[date.getDay()]);
          return days[date.getDay()];
        }
        let date = new Date(this.years[i], this.month[i], this.days[i]);
        getWeekDay(date);
      }

      for (let i = 0; i < this.kyivDayDate.length; i++) {
        this.kyivFiveDayRenderData.push({
          metric: this.kyivFiveDayMetric[i],
          day: this.dayName[i]
        })
      }

      console.log(this.kyivFiveDayData);
    });
    

    // this.dataService.favoriteList.forEach(d => {
    //   if (this.ourData.currCity === d.currCity) {
    //     this.status = false;
    //   }
    // })
  }

  showCityList() {
    this.input.focused = true;
    if (this.inputValue !== '' || this.inputValue !== undefined) {
      this.condition = false;
      this.cityList = this.cityList.filter((city) => {
        return city.toLocaleLowerCase().startsWith(this.inputValue.toLocaleLowerCase());
      })
    }
  }
  hideCityList() {
    this.input.focused = false;
    if ((this.input.focused === false && this.inputValue === undefined) || (this.input.focused === false && this.inputValue === '')) {
      this.condition = true;
    }
  }
  clearInput() {
    this.dataService.inputValue = this.inputValue;
    this.condition = true;
    
    this.dataService.getCityList().subscribe((res) => {
      console.log(res);
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
    this.inputValue = '';
  }
  chosenCity() {
    this.inputValue = this.selectValue;
  }
  addThisCity() {
    // this.dataService.favoriteList.push(this.ourData);
    // this.dataService.favoriteList.forEach(d => {
    //   if (this.ourData.currCity === d.currCity) {
    //     this.status = false;
    //   } else {
    //     this.status = true;
    //   }
    // })
    console.log(this.ourData);
    console.log(this.dataService.favoriteList);
  }
}
