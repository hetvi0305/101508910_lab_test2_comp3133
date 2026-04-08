import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist';
import { MissiondetailsComponent } from './missiondetails/missiondetails';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissiondetailsComponent }
];