import { Component, OnInit} from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'front-aurora-sanchez';
  datos: any[] | undefined;

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(data => {
      this.datos = data;
      console.log(this.datos);
    });
  }
}
