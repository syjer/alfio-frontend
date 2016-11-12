import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: ListEventsComponent },
      { path: 'event/:eventName', component: ShowEventComponent},
      { path: 'event/:eventName/reservation/:reservationId/*', component: ReservationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
