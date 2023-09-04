import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCviUngsrRKggkaBa2BxIVKWuwi7CCIOHo",
  authDomain: "sp2501.firebaseapp.com",
  databaseURL: "https://sp2501-default-rtdb.firebaseio.com",
  projectId: "sp2501",
  storageBucket: "sp2501.appspot.com",
  messagingSenderId: "573193615473",
  appId: "1:573193615473:web:d28192ef2564cb9bddc3d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    AdminComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
