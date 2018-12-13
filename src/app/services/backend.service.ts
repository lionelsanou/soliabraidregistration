import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from "../Model/user";
import { Injectable } from '@angular/core';
import { DataService } from './dataService';

@Injectable()
export class BackendService{
    private userCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;
    user:User;
    userDoc:AngularFirestoreDocument<User>;
    userId:string;
    public userDataService:DataService;
    public registration(user:User){
        delete user.userId;
        console.log(user);
        return this.userCollection.add(user);
    }

    public updateUser(user:User){
        this.db.doc(`users/${user.userId}`).update(user);  
        console.log("update is good");     
    }



    public deleteUser(user:User){
        this.db.doc(`users/${user.userId}`).delete();
        console.log("update is good"); 
              
    }


    public getUsers(){
        return this.db.collection('users').snapshotChanges();
        
    }
    public getUser(userId){
        console.log("a la la "+userId);
        return this.db.doc(`users/${userId}`).ref.get();
    }
    constructor(private db: AngularFirestore,private dto:DataService){
        //the below is the reference to our database
        this.userCollection=this.db.collection('users');
        this.users=this.userCollection.valueChanges();
    };   
}