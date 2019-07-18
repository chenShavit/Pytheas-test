import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {users} from '../../static/static';
import {User} from '../../models/user';
import { Trip } from '../../models/trip';
import { Place } from '../../models/place';
import {TripService} from './../../trip.service';
import { NgxFloatButtonModule } from 'ngx-float-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-main',
  templateUrl: './trip-main.component.html',
  styleUrls: ['./trip-main.component.scss'],
})
export class TripMainComponent implements OnInit {
  user_email:string ="ck20427@gmail.com";
   user:any;
   trips:any;
  // trips = new Array <Trip>();
  // places = new Array <Place>();
  constructor(private menu: MenuController,private router: Router, public tripService:TripService ) { }

 
  ngOnInit() {
        this.user=this.tripService.user;
        this.trips=this.tripService.user.trips;
  }
  chooseTrip(i:number){

    this.tripService.tripNum=i;
    this.router.navigate(['/details']);
  }

}
