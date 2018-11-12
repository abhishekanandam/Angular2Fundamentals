import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container { padding-left:20px; padding-right:20px; },
        .event-image { height: 100px; }
        a {cursor:pointer}
        `
    ]

})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode = false;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

        this.activatedRoute.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });

        //this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
    }

    addSession() {

        this.addMode = true;
    }

    cancelAddSession() {
        this.addMode = false;
    }

    saveNewSession(session: ISession) {

        const nextId = Math.max.apply(null, this.event.sessions.map(e => e.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;

    }



}
