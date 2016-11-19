import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { TicketSelectionComponent } from './ticket-selection/ticket-selection.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    TicketSelectionComponent,
    ReservationComponent,
    TicketViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',                                                           component: ListEventsComponent },
      { path: 'event/:eventName',                                           component: TicketSelectionComponent},
      { path: 'event/:eventName/reservation/:reservationId',                component: ReservationComponent},
      { path: 'event/:eventName/reservation/:reservationId/book',           component: ReservationComponent},
      { path: 'event/:eventName/reservation/:reservationId/success',        component: ReservationComponent},
      { path: 'event/:eventName/reservation/:reservationId/waitingPayment', component: ReservationComponent},
      { path: 'event/:eventName/reservation/:reservationId/failure',        component: ReservationComponent},
      { path: 'event/:eventName/ticket/:ticketId/view',                     component: TicketViewComponent}
    ])
  ],
  providers: [{ provide: XSRFStrategy, useValue: new CookieXSRFStrategy('XSRF-TOKEN', 'X-XSRF-TOKEN') }],
  bootstrap: [AppComponent]
})
export class AppModule { }
