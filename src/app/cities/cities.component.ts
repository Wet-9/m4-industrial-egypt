import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from '../getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any;
  color: boolean=false;
    constructor(private _cities: GetcitiesService) { }
    ngOnInit() {
      this.cities=this._cities.getCitiesInfoData();
      this.color=this.colorit();
    }
    colorit(){
      for (var i = 0; i<this.cities.length;i++){
        if (this.cities[i].attractionSites.length<3){
          return false;
        }
      } 
      return true
    }

}
