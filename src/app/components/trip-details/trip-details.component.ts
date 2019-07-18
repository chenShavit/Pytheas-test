import { Component, OnInit } from '@angular/core';
import { TripService } from '../../trip.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {

  constructor( private http: HttpClient,public tripService:TripService, private router: Router) {

   }
  trip:any;
  days:any;

  ngOnInit() {
    this.trip=this.tripService.trip;
    if(!this.trip){
      debugger
      this.trip=this.tripService.trips[this.tripService.tripNum];
    }
    for (var i=0; i<this.trip.places[0].length;i++){
      this.tripService.places.push(this.trip.places[0][i].address)
  }
    for(var i=0; i < this.tripService.places.length; i++){
    this.tripService.getMarkCoord(this.tripService.places[i]);
    }
    var l = this.tripService.markesTemp;
  }
  chooseAttracrion(place){
    this.tripService.attraction=place;
    this.router.navigate(['attraction']);
  }
  route(trip:any){
    this.router.navigate(['map']);
  }
}
