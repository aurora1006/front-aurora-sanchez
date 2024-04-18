import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsuarioComponent
  },
  {
    path: 'detail',
    component: DetalleUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
