import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators"

@Injectable()
export class EventListResolver implements Resolve<any>{

    constructor(private eventService:EventService){

    }

    resolve(){
        return this.eventService.getEvents().pipe(map(events => events))
    }

}