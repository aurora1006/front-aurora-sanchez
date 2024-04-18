import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent implements OnInit {

  users: any[] | undefined;

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(u => {
      this.users = u;
      console.log(this.users);
    });
  }
  
}
