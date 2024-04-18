import { Component, OnInit} from '@angular/core';
import { UsersApiService } from './services.rest/users.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'front-aurora-sanchez';
  datos: any[] | undefined;

  constructor(private userService: UsersApiService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.userService.getUsers().subscribe(data => {
      this.datos = data;
      console.log(this.datos);
    });
  }
}
