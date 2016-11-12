import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EventListItem } from './models/event-list-item';
import { PublicEvent } from './models/public-event';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EventService {

  constructor(private http : Http) { }

  getEvents(): Promise<EventListItem[]> {
    return this.http.get('/api/public/events').toPromise().then(response => response.json() as EventListItem[]);
  }

  getEventByName(name: string): Promise<PublicEvent> {
    return this.http.get('/api/public/events/'+name).toPromise().then(response => response.json() as PublicEvent);
  }

}
