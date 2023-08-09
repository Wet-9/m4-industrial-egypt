import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { citiesWeather } from '../cities/cities-info-data';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  cityName!: string;
  cityWeather: any;

  // Properties for weather details
  summerM!: number;
  summerN!: number;
  winterM!: number;
  winterN!: number;
  springM!: number;
  springN!: number;
  autumnM!: number;
  autumnN!: number;
  vt!: string;
  vf!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityName') || '';
    this.cityWeather = citiesWeather.find(city => city.name === this.cityName);

    // Assign values for weather details properties
    this.summerM = this.cityWeather.summerM;
    this.summerN = this.cityWeather.summerN;
    this.winterM = this.cityWeather.winterM;
    this.winterN = this.cityWeather.winterN;
    this.springM = this.cityWeather.springM;
    this.springN = this.cityWeather.springN;
    this.autumnM = this.cityWeather.autumnM;
    this.autumnN = this.cityWeather.autumnN;
    this.vt = this.cityWeather.visitTo;
    this.vf = this.cityWeather.visitFrom;
  }
}
