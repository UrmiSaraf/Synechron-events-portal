import { Component , Input , Output , EventEmitter, OnChanges,Inject} from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from '../services/sep-events.service';

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent implements OnChanges{
    constructor(@Inject(SepEventsService) private _eventsService:SepEventsService) { 
        
    }
    title:string ="Details of Event - ";
    event:SepEvent;
  //  @Input("receivedEvent") event:SepEvent;
    @Input("receivedEventId") eventId:number;
    @Output("onConfirmation") sendConfirmation:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.event=this._eventsService.getSingleEvent(this.eventId);
    }
    onSendConfirmation():void{
        this.sendConfirmation.emit("Received Event Successfully!");
    }
}