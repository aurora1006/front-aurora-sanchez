import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersApiService } from './services.rest/users.api.service';
import { DetalleUsuarioComponent } from './modules/users/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
