import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { ReservationService } from '../reservation.service';
import { PublicEvent } from '../models/public-event';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.css'],
  providers: [EventService, ReservationService]
})
export class TicketSelectionComponent implements OnInit {

  event : PublicEvent;
  reservationForm : FormGroup;

  constructor(private eventService: EventService,
              private reservationService : ReservationService,  
              private route: ActivatedRoute, 
              private formBuilder: FormBuilder,
              private router: Router) { }

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

  onSubmit({value, valid} : {value: any, valid: boolean}) : void {
    //FIXME add validation :D
    
    this.reservationService.reserve(this.event.key, value).subscribe(
      result => {
        if(result.success && result.status === 'OK') {
          this.router.navigateByUrl(result.data);
        } else {
          console.log(result);//FIXME
        }
      },
      err => console.log(err)//FIXME
    );
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
