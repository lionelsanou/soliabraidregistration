import { User } from "../Model/user";

export class DataService{
    private user:User;
    setUser(user){
        this.user=user;
        console.log("~~~~~~~ "+JSON.stringify(user));
    }
    getUser(){
        return this.user;
    }
}