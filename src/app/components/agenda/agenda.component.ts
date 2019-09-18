import { Component, OnInit } from '@angular/core';
import { AgendarService} from '../../servicios/agendar.service';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  
})
export class AgendaComponent implements OnInit {

  constructor(private agendar_service:AgendarService) { }

  ngOnInit() {

}
}