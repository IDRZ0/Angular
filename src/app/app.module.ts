import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LugarComponent } from './lugar/lugar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lugar',
    pathMatch: 'full'
  },
  {
    path: 'jurados',
    loadChildren: () => import('./jurados/jurados.module').then(m => m.JuradosModule)
  },
  {
    path: 'votacion',
    loadChildren: () => import('./votacion/votacion.module').then(m => m.VotacionModule)
  },
  {
    path: 'lugar',
    component: LugarComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LugarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
