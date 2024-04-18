import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent implements OnInit {

  @Input('user')
  public user!: any;

  ngOnInit(): void {
    console.log(this.user);
  }
  
}
