import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
    selector: 'nav-bar',
    templateUrl: '../nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size:15px; }
        #searchForm { margin-right:100px; }
        @media (max-width:1200px) {#searchForm {display:none}}
        li > a.active { color:#F97924 }
    `]

})
export class NavBarComponent implements OnInit {

    searchTerm = '';
    foundSessions: ISession[];
    eventList: IEvent[];

    constructor(private auth: AuthService,
                private eventService: EventService,
                ) {

    }

    ngOnInit() {

        this.eventService.getEvents().subscribe((events) => {
                                                    this.eventList = events;
                                                    //console.log(this.eventList)
                                                });
    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions => { this.foundSessions = sessions; }));
        //console.log(this.foundSessions);
    }

}
