import { RouterModule, Routes } from '@angular/router';
import { ListOfDatesComponent } from './components/list-of-dates/list-of-dates.component';
const app_routes: Routes = [
  { path: '', component: ListOfDatesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
