import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TripService } from '../../trip.service';




@Component({

  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  baseUrl:string ='https://www.kayak.com'
  hotelUrl:string;

 

  constructor(private router: Router , public tripService: TripService) {
 
   }

  ngOnInit() {
 this.tripService.loadAnimation();
   this.tripService.getHotelsData( '2019-12-20' ,'2019-12-24','2');
   
   

  }
  
  route(url:any){
    window.open(this.baseUrl+url, '_blank') 
  }
}
