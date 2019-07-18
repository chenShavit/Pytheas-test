
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { OverlayModule } from "@angular/cdk/overlay";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent/home.component';
import { FormStepComponent } from './components/FormStep/form-step.component';
import { ChipsComponent } from './components/Chips/chips.component';
import { TripMainComponent } from './components/TripMain/trip-main.component';
import { ChooseProfileComponent } from './components/ChooseProfile/choose-profile.component';
import { FilterComponent } from './components/Filter/filter.component';
import { ExploreComponent } from './components/Explore/explore.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { AttractionComponent } from './components/Attraction/attraction.component';
import { FlightsComponent } from './components/Flights/flights.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MapComponent } from './components/Map/map.component';
import {AgmCoreModule} from '@agm/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'; 
import { LottieAnimationViewModule } from 'ng-lottie';
import { NgxFloatButtonModule } from 'ngx-float-button'
import { HotelComponent } from './components/HotelComponent/hotel.component';

@NgModule({
  declarations: [AppComponent,HotelComponent, HomeComponent, FormStepComponent,ChipsComponent,TripMainComponent, MapComponent, ChooseProfileComponent, FilterComponent, ExploreComponent, TripDetailsComponent, AttractionComponent, FlightsComponent],
  entryComponents: [],
  imports: [ 
    LottieAnimationViewModule.forRoot(),
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    HttpModule,
    NgxFloatButtonModule,
    AgmDirectionModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUAH1xG3UbqX8btjKTE80KoOMPgiknzo',
  libraries: ['geometry']
    }),
    HttpClientModule,],
  providers: [
    SplashScreen,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
