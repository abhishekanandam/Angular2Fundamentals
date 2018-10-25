import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared";



@Component({
    templateUrl:'create-event-component.html'
})
export class CreateEventComponent implements OnInit{

    newEvent: any;
    event: any;

    isDirty:boolean = true;
    constructor(private router:Router, private eventService:EventService){

    }

    ngOnInit(){

        this.event = {
            name: 'ng Spectacular',
            date: '08/08/2019',
            time: '10 am',
            price: 599.99,
            location: {
                address: '456 ffgd',
                city: 'Bangalore',
                country: 'India'
            },
            onlineUrl: 'http://ngSpectacular.com',
            imageUrl: 'http://ngSpectacular.com/logo.png'
        }
    }

    cancel(){
        this.router.navigate(['/events'])
    }

    saveEvent(formValues){
        //console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events'])
    }
}