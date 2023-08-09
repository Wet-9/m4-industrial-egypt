import { Injectable } from '@angular/core';
import { constCitiesinfo } from './cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

  constructor() { }

  getCitiesInfoData() {
    return constCitiesinfo;
  }
}
