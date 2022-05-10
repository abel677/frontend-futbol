import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PUsuarioComponent } from './p-usuario/p-usuario.component';

const routes: Routes = [
  { path: '', component:PUsuarioComponent },
  { path: 'editar/:id', component:EditUserComponent }
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
