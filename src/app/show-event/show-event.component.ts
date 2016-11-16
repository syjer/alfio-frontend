import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { PublicEvent } from '../models/public-event';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css'],
  providers: [EventService]
})
export class ShowEventComponent implements OnInit {

  event : PublicEvent;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() : void {
    this.route.params.forEach((params: Params) => {
      let eventName: string = params['eventName'];
      this.eventService.getEventByName(eventName).subscribe(ev => this.event = ev);
    });    
  }
}
