import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from '../get-city-names.service';
import { prohibited } from "./customValidation";

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {

  cityNames: string[] = [];

  constructor(private _cityname: GetCityNamesService, private formB: FormBuilder) { 
    this.cityNames = this._cityname.getNames();
  }

  techIdeasForm = this.formB.group({
    name: ["",[Validators.required,Validators.minLength(3),prohibited(/tourist/)]],
    age: [""],
    email: ["",[Validators.required]],
    city: ["",[Validators.required]],
    brief: ["",[Validators.required,Validators.minLength(100),prohibited(/nothing/)]],
  });

  ngOnInit() {
  }

  onClick() {
    if (this.techIdeasForm.valid) {
      console.log(this.techIdeasForm.controls.brief.value);
      this.techIdeasForm.reset();
    }
  }
  
}
