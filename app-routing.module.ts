import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component:HomeComponent},
    {path: 'about-us', component: AboutComponent},
    {path: 'admin', component:AdminComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'events', component:EventsComponent  }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
