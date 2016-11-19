import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
  reservationForm : FormGroup;

  constructor(private eventService: EventService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() : void {
    this.route.params.forEach((params: Params) => {
      let eventName: string = params['eventName'];
      this.eventService.getEventByName(eventName).subscribe(ev => {
        this.event = ev
        this.buildForm();
      });
    });    
  }

  // generate a list containing a sequence from 0..quantity
  toSequenceFromZero(quantity: number) : number[] {
    return Array.from(Array(quantity + 1).keys())
  }

  onSubmit() : void {
    console.log(this.reservationForm.value);
  }

  private buildForm() : void {
    let fb = this.formBuilder;
    this.reservationForm = fb.group({
      reservation: fb.array([])
    });
    this.event.activeCategories.forEach(category => {
      let reservation = <FormArray> this.reservationForm.controls['reservation'];
      reservation.push(this.ticketCategoryForm(category))
    });
  }

  private ticketCategoryForm(category: any) : FormGroup {
    return this.formBuilder.group({ticketCategoryId: [category.ticketCategoryId], amount: [0]});
  }
}
