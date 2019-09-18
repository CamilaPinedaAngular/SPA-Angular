import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import {AgendarService }from './servicios/agendar.service';




//componentes 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { DiseñosComponent } from './components/diseños/diseños.component';
import { BodyComponent } from './components/shared/body/body.component';
 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AgendaComponent,
    ContactenosComponent,
    DiseñosComponent,
    BodyComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule
    
  ],
  providers: [
    AgendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
