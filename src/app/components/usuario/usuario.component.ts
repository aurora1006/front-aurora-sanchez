import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  
  users: any[] | undefined;
  user: any;
  detail: boolean = false;

  constructor(private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(u => {
      this.users = u;
    });
  }

  irDetalle(user?: any) {
    const userObj: NavigationExtras = {
      state: {
        user: user
      }
    };
    this.router.navigate([ `/detail` ], userObj);

  }
}
