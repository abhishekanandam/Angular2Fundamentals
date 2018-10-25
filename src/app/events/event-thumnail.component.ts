import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles:[`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        `
    ]

})
export class EventThumbnailComponent{

    @Input() event: IEvent
    @Output() eventClick = new EventEmitter()

    logData(){
        console.log("Template Variables");
    }

    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }

    getStartTimeClass(){

        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}