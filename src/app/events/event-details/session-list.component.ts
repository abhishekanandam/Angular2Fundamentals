import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";


@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html'
})
export class SessionListComponent implements OnChanges{

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[];

    constructor(private auth: AuthService, private voterService: VoterService){

    }

    ngOnChanges(){

        if(this.sessions){

            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotes);
        }
    }

    toggleVote(session: ISession){
        //console.log("toggle");
        if(this.userHasVoted(session)){
             //console.log("vote:" + session);
            this.voterService.deleteVoter(session, this.auth.currentUser.userName)
        }else{
             //console.log("unvote:" + session);
            this.voterService.addVoter(session, this.auth.currentUser.userName)
        }

        if(this.sortBy === 'votes'){
            this.visibleSessions.sort(sortByVotes)
        }

    }

    userHasVoted(session: ISession){
        //console.log("current user:" + this.auth.currentUser);
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

    filterSessions(filter){

        if(filter == 'all'){
            
            this.visibleSessions = this.sessions.slice(0);
        }else{

            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }

        //console.log(this.visibleSessions);

    }

}

function sortByName(s1: ISession, s2: ISession){

    if(s1.name > s2.name) 
        return 1;
    else if(s1.name === s2.name) 
        return 0;
    else 
        return -1;
}

function sortByVotes(s1: ISession, s2: ISession){

    return s2.voters.length - s1.voters.length;
}
