import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventListItem } from '../models/event-list-item';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css'],
  providers: [EventService]
})
export class ListEventsComponent implements OnInit {

  events: EventListItem[];

  constructor(private eventService : EventService) { }

  ngOnInit() {
    this.eventService.getEvents().then(events => this.events = events);
  }

}
