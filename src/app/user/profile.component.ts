import { Component, OnInit, inject, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';


@Component({
  templateUrl: `./profile.component.html`,
})
export class ProfileComponent implements OnInit {
       
    constructor(private authService:AuthService, 
            private router:Router,
            @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }

    profileForm: FormGroup
    ngOnInit(){

        let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
        let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    cancel(){
        this.router.navigate(['events'])
    }

    saveProfile(formValues){
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.toastr.success('profile saved!!');
            //this.router.navigate(['events']);
        }
    }
}