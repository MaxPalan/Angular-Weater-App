import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

interface currData {
  currCity?: string;
  currTemp?: number;
  currWeather?: string;
}

let cityName: string[] = [];
cityData.forEach(c => {
  cityName.push(c.AdministrativeArea.LocalizedName);
})

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  inputValue!: string;
  cityName = cityName;
  currentCity: any;
  favoriteList: Array<currData> = [];
  
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
  
}
