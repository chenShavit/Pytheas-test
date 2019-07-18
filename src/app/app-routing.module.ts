import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/HomeComponent/home.component';
import { FormStepComponent } from './components/FormStep/form-step.component';
import { TripMainComponent } from './components/TripMain/trip-main.component';
import { ChooseProfileComponent } from './components/ChooseProfile/choose-profile.component';
import { FilterComponent } from './components/Filter/filter.component';
import { ExploreComponent } from './components/Explore/explore.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { AttractionComponent } from './components/Attraction/attraction.component';
import { FlightsComponent } from './components/Flights/flights.component';
import { MapComponent } from './components/Map/map.component';
import { HotelComponent } from './components/HotelComponent/hotel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormStepComponent },
  { path: 'trip', component: TripMainComponent },
  { path: 'choose', component: ChooseProfileComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'details', component: TripDetailsComponent },
  { path: 'attraction', component: AttractionComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'map', component: MapComponent },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
