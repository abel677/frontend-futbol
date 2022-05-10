import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) { }

  getRols(){
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`http://127.0.0.1:8000/api/rol`,{headers:header});
  }
}
