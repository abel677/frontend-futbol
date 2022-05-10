
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modulos/usuario/p-usuario/user.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string){
    let params = new  HttpParams()
    .set('email',email)
    .set('password',password);
   return   this.http.post<any>("http://127.0.0.1:8000/api/login",params);
  }

  getUsers(){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return   this.http.get<any>("http://127.0.0.1:8000/api/users", {headers: header});
  }
 
  getUser(id:number){
    const header = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let params = new HttpParams()
    .set('id',id)
    return this.http.put<any>(`http://127.0.0.1:8000/api/user`,params,{headers:header});
  }

  deleteUser(id:number){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    let params = new  HttpParams()
    .set('id',id)
    return this.http.put<any>(`http://127.0.0.1:8000/api/user/d`, params,{headers: header});
 
  }

  editUser(id:number,form:User){
    const header = new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);

    let params = new HttpParams()
    .set('id',id)
    .set('image',form.image)
    .set('name',form.name)
    .set('email',form.email)
    .set('password',form.password)
    .set('rol_id',form.rol_id)
    console.log(params);
    
    return this.http.put(`http://127.0.0.1:8000/api/user/e`, params,{headers:header});
  }






}
