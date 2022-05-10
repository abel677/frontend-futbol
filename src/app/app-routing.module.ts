import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';

import { LoginComponent } from './paginas/login/login.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
const routes: Routes = [

  {
    path: '', component: LoginComponent, 
  },
  {
    path: 'principal', component: PrincipalComponent, 
  
    children:[
      {
        path:'usuario', 
        loadChildren: () => import('./modulos/usuario/usuario.module').then(m => m.UsuarioModule),
      }
    ]
  },
];

@NgModule({
  imports: 
  [
    // RouterModule.forRoot(routes,{useHash:true}),
    RouterModule.forRoot(routes, { preloadingStrategy:QuicklinkStrategy },
    
  )],




exports: [RouterModule]
})
export class AppRoutingModule { }
