import { Injectable ,Inject} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { SepEvent } from "../models/sep-event";

@Injectable()
export class SepEventsService {
    constructor(@Inject(HttpClient) private _http:HttpClient){

    }

   // getAllEvents():SepEvent[]{
   //     return this.eventsData;
   // }

    getAllEvents():Observable<SepEvent[]>{
        return this._http.get<SepEvent[]>("http://localhost:9090/api/events");
     }



    getSingleEvent(id:number): SepEvent{
        let evnt:SepEvent=new SepEvent();
        for (const event of this.eventsData) {
            if(event.eventId==id){
            evnt= event;
            }            
        }
        return evnt;
    }
    

    private eventsData:SepEvent[]=[

        {
            eventId: 1,
            eventCode: 'JQ3SEM',
            eventName: 'jQuery 3.x Seminar',
            description: 'Discussion about all new features of jQuery 3.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1000,
            attendance: 67,
            logo: 'images/jq3.png'
        },
        {
            eventId: 2,
            eventCode: 'NG1SEM',
            eventName: 'Angular JS 1.x Seminar',
            description: 'Discussion about all new features of Angular JS 1.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1200,
            attendance: 57,
            logo: 'images/ng1.png'
        },
        {
            eventId: 3,
            eventCode: 'NG2SEM',
            eventName: 'Angular 2.x Seminar',
            description: 'Discussion about all new features of Angular 2.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1400,
            attendance: 97,
            logo: 'images/ng2.png'
        },
        {
            eventId: 4,
            eventCode: 'NG4SEM',
            eventName: 'Angular 4.x Seminar',
            description: 'Discussion about all new features of Angular 4.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1600,
            attendance: 62,
            logo: 'images/ng2.png'
        },
        {
            eventId: 5,
            eventCode: 'NG5SEM',
            eventName: 'Angular 5.x Seminar',
            description: 'Discussion about all new features of Angular 5.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 2000,
            attendance: 88,
            logo: 'images/ng2.png'
        },
        {
            eventId: 6,
            eventCode: 'BS3SEM',
            eventName: 'Bootstrap 3.x Seminar',
            description: 'Discussion about all new features of Bootstrap 3.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1500,
            attendance: 84,
            logo: 'images/bs3.png'
        },

    ];
}