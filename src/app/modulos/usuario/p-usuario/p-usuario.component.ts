import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
import { User } from './user.model';


@Component({
  selector: 'app-p-usuario',
  templateUrl: './p-usuario.component.html',
  styleUrls: ['./p-usuario.component.css']
})
export class PUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  usuarios: any;
  imagenPath: any;
  active:any;
  userActive:any;

  ngOnInit(): void {
    this.getUsers();
  }
  editActive(id:number){
    if(this.active == 1){
      // this.userActive = "activo";
      this.active = 0
    }else{
      // this.userActive = "inactivo";
      this.active = 1
    }
    this.usuarioService.editAcative(id,this.active).subscribe({
      next:(data)=>{
        this.active = data.active;
        
      },
      error:(err)=>console.log(err)
    });
    this.getUsers();
  }


  getUsers() {
    this.usuarioService.getUsers().subscribe({
      next: (s) => {
        this.usuarios = s;
        
      },
      error: (e) => console.log(e)
    });
  }
  
  udelete(id:number) {
    Swal.fire({
      title: 'Estás seguro?',
      text: "Deseas eliminar este registro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.deleteUser(id).subscribe({
          next: (s) => {
            Swal.fire(
              'Eliminado!',
              s.message,
              'success'
            )
          },
          error: (e) => {
            Swal.fire(
              'Error',
              e.message,
              'error'
            )
          }
        })

      }
    })



  }

  edit(id: number) {
    this.router.navigate([`/principal/usuario/editar/${id}`]);
  }
  
 

}


