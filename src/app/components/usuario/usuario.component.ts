import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  
  users: any[] | undefined;
  user: any;
  detail: boolean = false;

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(u => {
      this.users = u;
      console.log(this.users);
    });
  }

  irDetalle(v: boolean, user?: any) {
    this.user = user;
    this.detail = v;
  }
}
