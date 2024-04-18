import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    DetalleUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    ButtonModule,
    DividerModule,
    TableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
