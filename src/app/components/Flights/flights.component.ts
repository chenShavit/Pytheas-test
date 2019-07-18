import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TripService } from '../../trip.service';




@Component({

  selector: 'flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  details= {
    from:'TLV',
    to: 'CDG',
    dateFrom : '18/9/2019',
    dateTo : '23/9/2019'
  }

 

  constructor(private router: Router , public tripService: TripService) {
 
   }

  ngOnInit() {
 this.tripService.loadAnimation();
   
   this.tripService.getFilght(this.details);
  

  }
  
  route(flight:any){
    window.open(flight.deep_link, '_blank') 
  }
}
