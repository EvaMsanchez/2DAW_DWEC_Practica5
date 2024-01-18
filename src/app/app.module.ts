import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneracionesComponent } from './components/generaciones/generaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneracionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

