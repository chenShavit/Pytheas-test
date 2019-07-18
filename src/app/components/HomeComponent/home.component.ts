import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Router } from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
const { LocalNotifications } = Plugins;
import { TripService } from '../../trip.service';

declare var angular: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any = {};
  constructor(private http: HttpClient, private router: Router, private googlePlus: GooglePlus, public tripService: TripService) { }
  baseUrl: string = 'http://ec2-35-180-205-235.eu-west-3.compute.amazonaws.com/api';
  sessionToken: string;
  ngOnInit() {
  }
  getData() {
    let token = this.user.token;
    this.getSessionToken(token);
    // this.http.get('https://www.googleapis.com/plus/v1/pepole/me?access_token='+ token).subscribe((data:any)=>{
    //   this.tripService.user.name=data.displayName;
    //   this.tripService.user.image=data.image.url;
  }
  public getSessionToken(token: string): Promise<any> {
    return this.http.post(this.baseUrl + '/login', { google_token: token }, ).toPromise().then((res: any) => {
 
      this.sessionToken=JSON.parse(res._body);
    }).catch();
  }
}
