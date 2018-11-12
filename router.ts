import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterComponent,
    EventListResolver,
    CreateSessionComponent

} from './src/app/events/index';

import { Routes } from '@angular/router';
import { Error404Component } from 'src/app/errors/404.component';


export const appRoutes: Routes = [

    {
        path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']
    },
    {
         path: 'events', component: EventListComponent, resolve: {events: EventListResolver}
    },
    {
        path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterComponent]
    },
    {
        path: 'events/session/new', component: CreateSessionComponent
    },
    {
        path: '404', component: Error404Component
    },
    {
        path: '', redirectTo: '/events', pathMatch: 'full'
    },
    {
        path: 'user', loadChildren: 'src/app/user/user.module#UserModule'
    }
];
