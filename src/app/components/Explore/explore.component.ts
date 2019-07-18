import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import {TripService} from './../../trip.service';
import { Trip } from '../../models/trip';



@Component({
  selector: 'explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
 trips:any;
 pics=['assets/paris1.jpeg','assets/paris2.jpeg','assets/paris3.jpeg'];

  constructor( public tripService:TripService,  private route: ActivatedRoute, private router: Router,) {
   
   }

  ngOnInit() {
    // this.tripService.loadAnimation();
    // this.tripService.getExplore();
    console.log(this.tripService.expolreTrips);
    for( var i=0; i <this.tripService.expolreTrips.length;i++){
      this.tripService.expolreTrips[i].pictures=this.pics;
      for( var j=0; j < this.tripService.expolreTrips[i].places.length;j++){
        for( var k=0; k < this.tripService.expolreTrips[i].places[j].length;k++)
        this.tripService.expolreTrips[i].places[j][k].picture=this.pics[1];
      }
    }
  }
  chooseTrip(trip:Trip){
    this.tripService.trip=trip;
    this.router.navigate(['/details']);
  }
}