import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  eventName: string;
  ticketId: string;
  ticketCodeUrl: string;
  ticketDownloadUrl: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.eventName = params['eventName'];
      this.ticketId = params['ticketId'];
      let baseUrl = '/event/' + this.eventName + '/ticket/' + this.ticketId;
      this.ticketCodeUrl = baseUrl + '/code.png';
      this.ticketDownloadUrl = baseUrl + '/download-ticket';
    })
  }

}
