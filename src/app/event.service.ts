import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EventListItem } from './models/event-list-item';
import { PublicEvent } from './models/public-event';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'


@Injectable()
export class EventService {

  constructor(private http : Http) { }

  getEvents(): Observable<EventListItem[]> {
    return this.http.get('/api/public/events').map(response => response.json() as EventListItem[]);
  }

  getEventByName(name: string): Observable<PublicEvent> {
    return this.http.get('/api/public/events/' + name).map(response => response.json() as PublicEvent);
  }

}
