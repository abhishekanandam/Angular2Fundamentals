import { Component } from "@angular/core";
import { ISession } from "../shared";


@Component({

})
export class VoterService{


    deleteVoter(session: ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter !== voterName)
    }

    addVoter(session: ISession, voterName: string){
        console.log(voterName);
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string){
        // console.log(voterName);
        // console.log(session.voters.some(voter => voter === voterName))
        return session.voters.some(voter => voter === voterName);
    }
}