import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, empty } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { User } from '../Model/user';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:User[];
  constructor(public dto:DataService,private routerService:Router,private db: AngularFirestore,private backendService:BackendService) { }
  navigateSignUpPage(){
    this.routerService.navigate(['/signup']); 
  }
  ngOnInit() {
    this.backendService.getUsers().subscribe(actionArray=>{
      this.users=actionArray.map(item=>{
        
        return {
                userId:item.payload.doc.id,
                ...item.payload.doc.data()
              } as User;
      })
    });
  }

}
