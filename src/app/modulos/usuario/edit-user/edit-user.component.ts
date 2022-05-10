import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RolService } from 'src/app/servicios/rol.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { User } from '../p-usuario/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  formEdit:FormGroup;
  
  rols:any;
  id:number;
  name:string;
  url:string;
  file:any;
  fotoSelected:string | ArrayBuffer;


  constructor
  (
    private rolService:RolService, private formBuilder:FormBuilder, 
    private rute:ActivatedRoute, private userService:UsuarioService
  ) 
  { }

  ngOnInit(): void {
    this.allRols();
    this.formEditUser();

    this.rute.params.subscribe({
      next:(id: Params)=>this.id = id["id"],         
      error:(err)=>console.log(err)
    }); 

    this.edit(this.id);   

  }

  edit(id:number) {
    this.userService.getUser(id).subscribe({
      next:(data)=>{
        data.forEach(element => {
          this.url = element.image;
          this.name = element.name;

          this.formEdit.patchValue({
            name:element.name,
            email:element.email,
            rol_id:element.rol_id
          });
        });
            
      },
      error:(err)=> console.log(err)
            
    });
  }

  allRols(){
    this.rolService.getRols().subscribe({
      next: (rols) => this.rols = rols,
      error:(err) => console.log(err)
    });
  }
  capturar(form:User){
    this.userService.editUser(this.id,form).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=> console.log(err)
    });
    
  }
  private formEditUser(){
    this.formEdit = this.formBuilder.group({
      image:['',[Validators.required]],
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      rol_id:['',[Validators.required]],
    });
  }
  onPhotoSelected(event):void{
    if(event.target.files && event.target.files[0]){
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fotoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  
  

}

