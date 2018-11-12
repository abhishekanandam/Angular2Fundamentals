import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouterComponent implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExist) {
            this.router.navigate(['/404']);
        }

        return eventExist;
    }

}
