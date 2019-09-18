import { RouterModule,Routes } from "@angular/router";
import { HomeComponent} from './components/home/home.component';
import { Component } from '@angular/core';
import { AgendaComponent} from './components/agenda/agenda.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component'
import { DiseñosComponent } from './components/diseños/diseños.component'

const APP_ROUTES:Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'contactenos', component: ContactenosComponent},
    { path: 'agenda', component: AgendaComponent},
    { path: 'diseños', component: DiseñosComponent},
    { path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES ); 

