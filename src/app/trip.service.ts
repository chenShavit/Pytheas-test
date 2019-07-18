import { Injectable } from '@angular/core';
import { User } from './models/user';
import { users } from './static/static';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from './models/flight';
import { Hotel } from './models/hotel';

declare var $: any;
declare var bodymovin: any;

@Injectable({
  providedIn: 'root'
})
export class TripService {
  //  httpOptions = {
  //   headers: new HttpHeaders({ 
  //     'Access-Control-Allow-Origin':'*',
  //   })
  // };
   httpOptions = {
    headers: new HttpHeaders({
      'Content-X-RapidAPI-Host': 'apidojo-kayak-v1.p.rapidapi.com/json' ,
       'X-RapidAPI-Key':'9a0a65a225msh958c12adcce4cd7p12ff05jsncf3f7562621b'
    })
  };
  user_email: string = "ck20427@gmail.com";
  user: any;
  trips: any=[];
  expolreTrips:any=[];
  trip: any;
  tripNum:number=0;
  cities:any=[];
  flights:any=[];
  hotels:any=[];
  hotel:Hotel;
  flight : Flight;
  attraction:any;
  tags: any;
  selectedTags: any = [];
  deep_link:string;
  depTime:any;
  arrivalTime:any;
  headers = new Headers({ 'Content-X-RapidAPI-Host': 'apidojo-kayak-v1.p.rapidapi.com/json' , 'X-RapidAPI-Key':'9a0a65a225msh958c12adcce4cd7p12ff05jsncf3f7562621b'});
  kilURL: string ='https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&';
  baseUrl: string = 'http://ec2-35-180-205-235.eu-west-3.compute.amazonaws.com/api';
  flightsURL:string ='https://api.skypicker.com/flights?';
  hotelURL:string='https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?airportcode=CDG&rooms=1';
  hotelsData:any;
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  displayLoader:boolean;
  pics=['assets/paris1.jpeg','assets/paris2.jpeg','assets/paris3.jpeg'];
  places:any =[];
  markesTemp:any=[];
  markTemp:any={
    lat:0,
    lng:0
  };
  markURL:string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  markers:any=[];
  mark:any={
    lat:0,
    lng:0
  };
  constructor(private http: HttpClient) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == this.user_email) {
        this.user = users[i];
        for( var j=0; j< users[i].trips.length;j++){
          if(this.user.trips[j].isBooked)(
          this.trips.push(this.user.trips[j])
          )
          else{
            this.expolreTrips.push(this.user.trips[j]);
          }
        }       
      }
    }
    this.lottieConfig = {
      path: 'assets/flight-a.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }
  // public getTrips(): Promise<any> {
  //   return this.http.get(this.baseUrl + '/trip').toPromise()
  //   .then((res: any) => {
  //     this.trips=res;
  //     for( var i=0; i <this.trips.length;i++){
  //       this.trips[i].pictures=this.pics;
  //       for( var j=0; j < this.trips[i].places.length;j++){
  //         for( var k=0; k < this.trips[i].places[j].length;k++)
  //         this.trips[i].places[j][k].picture=this.pics[1];
  //       }
  //     }
  //   }).catch(); 
  // }
   public getExplore(): Promise<any> {
    return this.http.get(this.baseUrl + '/explore').toPromise()
      .then((res: any) => {
        document.getElementById("loader").style.display = 'none';
        this.expolreTrips = res;
        for( var i=0; i <this.expolreTrips.length;i++){
          this.expolreTrips[i].pictures=this.pics;
          for( var j=0; j < this.expolreTrips[i].places.length;j++){
            for( var k=0; k < this.expolreTrips[i].places[j].length;k++)
            this.expolreTrips[i].places[j][k].picture=this.pics[1];
          }
        }

      }).catch(); 
  }
  public getTags(): Promise<any> {
    return this.http.get(this.baseUrl + '/tags').toPromise()
      .then((res: any) => {
        this.tags = res.slice(0, 15);
      }).catch();
  }
  
  public getCities(): Promise<any> {
    return this.http.get(this.baseUrl + '/cities').toPromise()
      .then((res: any) => {
        this.cities = res;
      }).catch(); 
  }

  public getHotelsData(checkin:string,checkout:string, adultsNumner:string){
    return this.http.get(this.hotelURL + '&checkin='+checkin+'&checkout='+checkout+'&adults='+adultsNumner,this.httpOptions).toPromise()
    .then((res: any) => {
      document.getElementById("loader").style.display = 'none';
      this.hotelsData= res.hotelset;
      for( var i=0; i< 10; i++){
        this.hotel= new Hotel();
        this.hotel.name=this.hotelsData[i].name;
        this.hotel.address=this.hotelsData[i].address;
        this.hotel.price=this.hotelsData[i].price;
        this.hotel.stars=this.hotelsData[i].stars;
        this.hotel.picture=this.hotelsData[i].thumburl;
        this.hotel.deep_link=this.hotelsData[i].shareURL;
        this.hotels.push(this.hotel);
        }
        return this.hotels;
    }).catch(); 
  }

  loadAnimation() {
    setTimeout(() => {
      if (!document.getElementById("loader")) return;

    this.displayLoader = true
    document.getElementById("loader").style.display = 'block';
    var animation = bodymovin.loadAnimation({
      container: document.getElementById("loader"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "assets/flight-a.json"
    });
  });
  }
  public getFilght(details:any): Promise<any> {
    var from = details.from;
    var to = details.to;
    var dateFrom = details.dateFrom;
    var dateTo = details.dateTo;
    return this.http.get(this.flightsURL + 'from='+ from + '&to='+ to + '&dateFrom=' + dateFrom + '&dateTo=' + dateTo + '&partner=picky&flight_type=return&max_stopovers=0').toPromise()
      .then((res: any) => {
        document.getElementById("loader").style.display = 'none';
        for( var i=0; i< 10; i++){
        this.flight= new Flight();
        this.flight.flightsflDuration=res.data[i].fly_duration;
        this.flight.airline=res.data[i].airlines[0];
        this.flight.price=res.data[i].price;
        this.flight.depTime=this.convertTimeUnix(res.data[i].dTime);
        this.flight.arrivalTime=this.convertTimeUnix(res.data[i].aTime);
        this.flight.deep_link=res.data[i].deep_link;
        this.flights.push(this.flight);
        }
        return this.flights;
      }).catch(); 
  }
  updateUserDestails(user?: any): Promise<any> {
    return this.http.post(this.baseUrl + '/profile', { user }, ).toPromise().then((res: any) => {
      JSON.parse(res._body);
    }).catch();
  }
  convertTimeUnix(time:any){
    var date= new Date(time*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    return hours + ':' + seconds.substr(-2);
  }
  getMarkCoord(place:string){
  
  return this.http.get(this.markURL+place+'&key=AIzaSyCzUAH1xG3UbqX8btjKTE80KoOMPgiknzo').toPromise().then((res: any) => {
    
    this.markTemp=res.results[0].geometry.location;
    this.markesTemp.push(this.markTemp);
  }).catch();
  }
 
}
