import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { BackendService } from '../services/backend.service';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private dto:DataService,private routerService:Router,private db: AngularFirestore,private backendService:BackendService) { }
  userPremise:Promise<firebase.firestore.DocumentSnapshot>;
  ngOnInit() {
    console.log("Inside Confirmation Controller "+JSON.stringify(this.dto.getUser().userId));
    this.userPremise=this.backendService.getUser(this.dto.getUser().userId);
    this.userPremise.then(function(doc){
      if(doc.exists){
        //console.log("document does exist 1 "+JSON.stringify(doc));
        //console.log("document does exist 2 "+doc.data);
        doc.data;
        const data = doc.data as any;
        console.log("is "+JSON.stringify(data));
        return {data}
      }else{
        console.log("document does not exist");
      }
    }).catch(function(error){
      console.log("Something Went Wrong", error);
    }).then(function(result){
      console.log("Hope the it works");
      console.log(JSON.stringify(result));
      //console.log(this.userDataService);
    });
  }

}
