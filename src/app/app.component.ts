import { Component } from '@angular/core';
import { AuthService } from './pages/servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IDX-Colcan';

  constructor (public AuthService:AuthService){

  }
}
