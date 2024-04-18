import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { Table } from 'primeng/table'; 

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  
  users: any[] | undefined;
  user: any;
  detail: boolean = false;

  @ViewChild('tb') tb: Table | undefined;

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

  applyFilterGlobal($event: any, stringVal: any) {
    this.tb!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
