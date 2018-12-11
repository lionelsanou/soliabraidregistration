import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttptutorialComponent } from './httptutorial/httptutorial.component';
import { environment } from '../environments/environment';
import { BackendService } from './services/backend.service';
import { DataService } from './services/dataService';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NotfoundpageComponent,
    ConfirmationComponent,
    HttptutorialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path:'',component:SignupComponent},
      {path:'signup',component:SignupComponent},
      {path:'confirmation',component:ConfirmationComponent},
      {path:'httptutorial',component:HttptutorialComponent},
      {path:'**',component:NotfoundpageComponent}
    ])
  ],
  providers: [BackendService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
