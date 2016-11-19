import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    ShowEventComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: ListEventsComponent },
      { path: 'event/:eventName', component: ShowEventComponent},
      { path: 'event/:eventName/reservation/:reservationId/book', component: ReservationComponent}
    ])
  ],
  providers: [{ provide: XSRFStrategy, useValue: new CookieXSRFStrategy('XSRF-TOKEN', 'X-XSRF-TOKEN') }],
  bootstrap: [AppComponent]
})
export class AppModule { }
