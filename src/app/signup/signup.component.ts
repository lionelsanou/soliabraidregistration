import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, empty } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { User } from '../Model/user';
import { DataService } from '../services/dataService';


@Component({
  selector: 'solia-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  users: User[];
  items: Observable<any[]>;
  userId: string;
  firstNameText: string;
  phoneText: number;
  braidStyleText: string;
  userIdText: string;
  userPromise: Promise<firebase.firestore.DocumentReference>

  submit(t) {

    this.user = t.value;
    this.user.date = this.getCurrentTime();
    console.log(this.user);
    if (this.user.userId != null) {
      console.log("I am updating");
      this.backendService.updateUser(this.user);
      this.resetForm();
    } else {
      this.userPromise = this.backendService.registration(this.user);
      this.userPromise.then(function (docRef) {
        console.log(docRef.id);
        return docRef.id;
      }).catch(function (error) {
        console.log("Error Getting the document", error);
      }).then(result => {
        //this.userId=result;
        //this.user.id=this.userId;
        console.log("result " + result);
        // console.log(this.userId);
        t = result;
        this.user.userId = t;
        //this.backendService.getUser(result);
        //this.dto.setUser(this.user);
        //console.log(JSON.stringify(this.user));
        //this.backendService.userDataService.user=this.user;
        //console.log("Inside DataService "+JSON.stringify(this.dto.getUser()));
        //this.routerService.navigate(['/confirmation']);    
      });
      this.resetForm();

    }

  }
  navigateAdminPage() {
    this.routerService.navigate(['/admin']);
  }
  constructor(public dto: DataService, private routerService: Router, private db: AngularFirestore, private backendService: BackendService) {
    //this.toastr.setRootViewContainerRef(vcr);
  }
  userObjectIsDefined() {
    if (this.user) {
      return true;
    } else {
      return false;
    }

  }
  getCurrentTime() {
    let now = new Date().toLocaleString();
    return now;
  }
  resetForm() {
    this.firstNameText = "";
    this.phoneText = undefined;
    this.braidStyleText = "";
    this.userIdText = null;
  }
  onEdit() {
    this.firstNameText = this.user.firstName;
    this.phoneText = this.user.phone;
    this.braidStyleText = this.user.braidStyle;
    this.userIdText = this.user.userId;
  }
  onDelete() {
    console.log("Delete User " + this.user);
    this.backendService.deleteUser(this.user);
    this.resetForm();
  }
  ngOnInit() {


  }

}
