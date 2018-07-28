import { Component, OnInit ,Inject} from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from "../services/sep-events.service";


@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventsListComponent implements OnInit{
    constructor(@Inject(SepEventsService) private _eventsService:SepEventsService) { }

    title: string = "Synechron Events List!";
    subTitle: string = "Published by Synechron HR..";
    childMessage:string="";
    selectedEvent:SepEvent;
    //searchChar:string="j";

    ngOnInit(): void{
       // this.events=this._eventsService.getAllEvents();
       this._eventsService.getAllEvents().subscribe(
       data=> this.events=data,
       err => console.log(err),
       () =>console.log("Events Service call finished"));    
    }

    onEventSelection(event:SepEvent):void{
        this.selectedEvent=event;
    }
    onChildConfirmation(msg:string):void{
        this.childMessage=msg;
    }

    events: SepEvent[] = [] ;
    
}