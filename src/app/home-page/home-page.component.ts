import { Component, ViewChild } from '@angular/core';

const cityData = [
  {
    "Version": 1,
    "Key": "7741",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "City Bell",
    "Country": {
      "ID": "AR",
      "LocalizedName": "Argentina"
    },
    "AdministrativeArea": {
      "ID": "B",
      "LocalizedName": "Buenos Aires"
    }
  },
  {
    "Version": 1,
    "Key": "3381799",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "City Centre",
    "Country": {
      "ID": "CA",
      "LocalizedName": "Canada"
    },
    "AdministrativeArea": {
      "ID": "BC",
      "LocalizedName": "British Columbia"
    }
  },
  {
    "Version": 1,
    "Key": "3554766",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "City Centre",
    "Country": {
      "ID": "CA",
      "LocalizedName": "Canada"
    },
    "AdministrativeArea": {
      "ID": "BC",
      "LocalizedName": "British Columbia"
    }
  },
  {
    "Version": 1,
    "Key": "16450",
    "Type": "City",
    "Rank": 75,
    "LocalizedName": "City Beach",
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "WA",
      "LocalizedName": "Western Australia"
    }
  },
  {
    "Version": 1,
    "Key": "3497112",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "City Centre",
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "ACT",
      "LocalizedName": "Australian Capital Territory"
    }
  },
  {
    "Version": 1,
    "Key": "3494430",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "City Centre",
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "NT",
      "LocalizedName": "Northern Territory"
    }
  },
  {
    "Version": 1,
    "Key": "2729363",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "City Areal",
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "RJ",
      "LocalizedName": "Rio De Janeiro"
    }
  },
  {
    "Version": 1,
    "Key": "2731236",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "City Bussocaba",
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "SP",
      "LocalizedName": "São Paulo"
    }
  },
  {
    "Version": 1,
    "Key": "2529683",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "City Dulas",
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "AGY",
      "LocalizedName": "Isle of Anglesey"
    }
  },
  {
    "Version": 1,
    "Key": "3522251",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "City Hall",
    "Country": {
      "ID": "IE",
      "LocalizedName": "Ireland"
    },
    "AdministrativeArea": {
      "ID": "CO",
      "LocalizedName": "County Cork"
    }
  }
]

const currentCity = [
  {
    "LocalObservationDateTime": "2021-06-12T23:05:00+03:00",
    "EpochTime": 1623528300,
    "WeatherText": "Mostly clear",
    "WeatherIcon": 34,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
      "Metric": {
        "Value": 17.2,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 63,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/current-weather/324505?lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/current-weather/324505?lang=en-us"
  }
]
const currTemp = currentCity[0].Temperature.Metric.Value;

const fiveDays = {
  "Headline": {
    "EffectiveDate": "2021-06-13T08:00:00+03:00",
    "EffectiveEpochDate": 1623560400,
    "Severity": 3,
    "Text": "Thunderstorms Sunday",
    "Category": "thunderstorm",
    "EndDate": "2021-06-13T20:00:00+03:00",
    "EndEpochDate": 1623603600,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/extended-weather-forecast/324505?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2021-06-12T07:00:00+03:00",
      "EpochDate": 1623470400,
      "Temperature": {
        "Minimum": {
          "Value": 14.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 23.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 3,
        "IconPhrase": "Partly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2021-06-13T07:00:00+03:00",
      "EpochDate": 1623556800,
      "Temperature": {
        "Minimum": {
          "Value": 14.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 21.8,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 16,
        "IconPhrase": "Mostly cloudy w/ t-storms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2021-06-14T07:00:00+03:00",
      "EpochDate": 1623643200,
      "Temperature": {
        "Minimum": {
          "Value": 15.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 25.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 16,
        "IconPhrase": "Mostly cloudy w/ t-storms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 40,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2021-06-15T07:00:00+03:00",
      "EpochDate": 1623729600,
      "Temperature": {
        "Minimum": {
          "Value": 16.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 25.2,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 17,
        "IconPhrase": "Partly sunny w/ t-storms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2021-06-16T07:00:00+03:00",
      "EpochDate": 1623816000,
      "Temperature": {
        "Minimum": {
          "Value": 14,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 24.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 16,
        "IconPhrase": "Mostly cloudy w/ t-storms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=5&unit=c&lang=en-us"
    }
  ]
}

let fiveDayMetric: any[] = [];
let dayDate: any[] = [];
fiveDays.DailyForecasts.forEach(d => {
  fiveDayMetric.push(d.Temperature.Maximum.Value);
  dayDate.push(d.Date.substr(0, 10).split('').filter(x => x !== '-').join(''));
})

let dayName: any[] = [];
let years: any[] = [];
let month: any[] = [];
let days: any[] = [];
dayDate.forEach(d => {
  years.push(+(d.slice(0, 4)));
  month.push(+(d.slice(4, 6)) - 1);
  days.push(+(d.slice(6)));
})
for (let i = 0; i < dayDate.length; i++) {
  function getWeekDay(date: Date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayName.push(days[date.getDay()]);
    return days[date.getDay()];
  }
  let date = new Date(years[i], month[i], days[i]);
  getWeekDay(date);
}
let fiveDaysRenderData: any[] = [];
for (let i = 0; i < dayDate.length; i++) {
  fiveDaysRenderData.push({
    metric: fiveDayMetric[i],
    day: dayName[i]
  })
}

let cityName: any[] = [];
cityData.forEach(c => {
  cityName.push(c.AdministrativeArea.LocalizedName);
})

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  
  @ViewChild('input') input: any;
  @ViewChild('select') select: any;

  condition: boolean = true;

  inputValue!: string;
  selectValue!: string;

  cityList = cityName;

  ourCity = this.cityList[0];
  ourTemp = currTemp;

  fiveDayData = fiveDaysRenderData;

  constructor() { }

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
      this.cityList = cityName;
    }
  }
  clearInput() {
    this.inputValue = '';
    this.condition = true;
    this.cityList = cityName;
  }
  chosenCity() {
    this.inputValue = this.selectValue;
  }
}
