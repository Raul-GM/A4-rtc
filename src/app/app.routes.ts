import { RouterModule, Routes } from '@angular/router';
import { ListOfDatesComponent } from './components/list-of-dates/list-of-dates.component';
import { DateDetailComponent } from './components/date-detail/date-detail.component';
const app_routes: Routes = [
  { path: '', component: ListOfDatesComponent },
  { path: 'date/:id', component: DateDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
