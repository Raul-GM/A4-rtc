import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//routing
import { app_routing } from './app.routes';

//Services
import { DatesService } from './services/Dates/dates.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListOfDatesComponent } from './components/list-of-dates/list-of-dates.component';
import { DateItemComponent } from './components/date-item/date-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ListOfDatesComponent,
    DateItemComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
    DatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
