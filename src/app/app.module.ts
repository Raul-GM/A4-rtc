import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//routing
import { app_routing } from './app.routes';

//Services
import { DatesService } from './services/Dates/dates.service';
import { AdminService } from './services/Admin/admin.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListOfDatesComponent } from './components/list-of-dates/list-of-dates.component';
import { DateItemComponent } from './components/date-item/date-item.component';
import { BandImagePipe } from './pipes/band-image/band-image.pipe';
import { DateCalendarComponent } from './components/date-calendar/date-calendar.component';
import { CityPipe } from './pipes/calendar/city.pipe';
import { SpanishMonthPipe } from './pipes/calendar/spanish-month.pipe';
import { DateDetailComponent } from './components/date-detail/date-detail.component';
import { BackbarComponent } from './components/backbar/backbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ListOfDatesComponent,
    DateItemComponent,
    BandImagePipe,
    DateCalendarComponent,
    CityPipe,
    SpanishMonthPipe,
    DateDetailComponent,
    BackbarComponent,
    AdminComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
    DatesService,
    AdminService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
