import { Component } from '@angular/core';
import { TripService } from './../../trip.service';

@Component({
    selector: 'attraction',
    templateUrl: 'attraction.component.html',
    styleUrls: ['attraction.component.scss']
})
export class AttractionComponent {

    constructor(public tripService: TripService) {

    }
    trip:any;
    attraction:any;
    ngOnInit() {
      this.trip=this.tripService.trip;
      this.attraction=this.tripService.attraction;

    }
}