import { Component, OnInit, NgZone, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TripService } from '../../trip.service';
import { MapsAPILoader } from '@agm/core';
import { Headers, Http } from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

declare let google: any;

@Component({

  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: any;
  lng: any;
  zoom: number;
  origin: any ;
  destination: any;
  kilometers:any;
  min:any;
  i:number=-1;
  nextPlace:string;
  startMark={
    lat:48.857118,
    lng:2.355305
  }
  currentPlace:string="Renaissance Paris Arc de Triomphe Hotel";
  //headers = new Headers({ 'Content-Type': 'application/json' });
  markURL:string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  kilURL: string ='https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&';
  //origins=48.877352,2.296985&destinations=48.860166,2.326572&key=AIzaSyCzUAH1xG3UbqX8btjKTE80KoOMPgiknzo&mode=walking
  // markers = [
  //   { lat: 48.877352, lng: 2.296985 },
  //   { lat: 48.860166, lng: 2.326572, alpha: 1 },
  //   { lat: 48.855519, lng: 2.315814, alpha: 1 },
  //   { lat: 48.875619, lng: 2.310487, alpha: 1 },
  // ];
  markers:any=[];
  mark:any={
    lat:0,
    lng:0
  };
  constructor(private http: HttpClient,private router: Router, public tripService: TripService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { 

  }
  
  ngOnInit() {
    this.zoom = 12;
    this.lat = 48.857118;
    this.lng = 2.355305;
      this.markers=this.tripService.markesTemp;
      this.kilometers=4.4;
  }
  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }
  getPathA() {
    this.i++;
    if (this.i <this.markers.length) {
      this.getDirection(this.markers[this.i],this.markers[this.i+1],this.i);
      this.getKilometers(this.markers[this.i],this.markers[this.i+1]);

    }
  }
  myLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
  getDirection(origin:any, destination:any,index:any) {
    this.origin =origin;
    this.destination = destination;
    this.currentPlace=this.tripService.places[index];
    this.nextPlace= this.tripService.places[index+1];
  }
  getKilometers(origin:any, destination:any){
   
    var o = new google.maps.LatLng(origin);
    var d =  new google.maps.LatLng(destination);
    this.kilometers = (google.maps.geometry.spherical.computeDistanceBetween(o, d)/ 1000).toFixed(2);
  }  

}


