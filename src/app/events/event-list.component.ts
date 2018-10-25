import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";


@Component({
    selector: 'events-list',
    templateUrl: '../events/event-list.component.html'
})
export class EventListComponent implements OnInit{

  eventList: IEvent

  constructor(private eventService:EventService, private route:ActivatedRoute){
      
  }

  ngOnInit(){
        this.eventList = this.route.snapshot.data['events'];
  }
    handleEventClicked(emittedData){
        console.log("Parent Component:" + emittedData);
    }

    // handleThumbnailClick(eventName){
    //     this.toastrService.success(eventName);
    // }

   
}