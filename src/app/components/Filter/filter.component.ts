import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TripService } from '../../trip.service';
import {map, startWith} from 'rxjs/operators';
import { NavController } from 'ionic-angular';
import { Http ,HttpModule} from '@angular/http';
import { AutoService } from '../../auto.service';
import { PopoverController } from '@ionic/angular';



export interface City {
  country: string,
  id: number,
  name: string
}

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cityCtrl = new FormControl();
  filterPlaces: Observable<City[]>;
  cities:any;
  dateStart:Date;
  dateEnd:Date;
  days:number;
  showError:boolean=false;

  constructor(public tripService: TripService) {

  }


  private _filterPlaces(event:any) {
    var val = event.target.value;
    const filterValue = val.toLowerCase();

    this.cities= this.tripService.cities.filter(city => city.name.toLowerCase().indexOf(filterValue) === 0);
  }
  chooseCity(city:string){
    
  }
  getDateStart(event:any){
  this.dateStart= event.detail.value;
  }

   getDateEnd(event:any){
    this.dateEnd= event.detail.value;
    var dt1 = new Date(this.dateStart);
    var dt2 = new Date(this.dateEnd);
   this.days= Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
   if(this.days<3){
    this.showError=true;
   }
   else{
    this.showError=false;
   }
    }
  ngOnInit() {
   
  }
}