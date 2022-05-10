import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './../../servicios/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,
    private router:Router){}

  ngOnInit(): void {
  }

  login(email:any, password:any){

    this.usuarioService.login(email.value,password.value)
      .subscribe({
        next: (data) => {
          localStorage.setItem('token', data.acces_token);
          this.router.navigateByUrl('principal')
        },
        error: (err) => {
          console.log(err);
          
        }
      })
    }
}
