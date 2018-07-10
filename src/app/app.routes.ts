import { RouterModule, Routes } from '@angular/router';
import { ListOfDatesComponent } from './components/list-of-dates/list-of-dates.component';
import { DateDetailComponent } from './components/date-detail/date-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { GroupDetailComponent } from './components/admin/group-detail/group-detail.component';
const app_routes: Routes = [
  { path: '', component: ListOfDatesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/group/:id', component: GroupDetailComponent },
  { path: 'date/:id', component: DateDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
