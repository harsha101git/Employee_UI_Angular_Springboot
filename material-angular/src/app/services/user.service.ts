import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  
   private url = 'http://localhost:8080/'; 

  constructor( private http:  HttpClient ) { }

getUser(){
  return this.http.get(this.url+'emp99/all');
}

deleteEmployee(user: any): Observable<any> {
  return this.http.delete(this.url+'emp99/delete/'+user);
}

getEmployee(user: any): Observable<any> {
  return this.http.get(this.url+'emp99/'+user);
}


createEmployee(user: any) : Observable<object> {
  return this.http.post(this.url+'emp99/add',user);
}

updateEmployee(user: any ): Observable<any> {
  return this.http.put(this.url+'emp99/update/'+user.id,user);
}

sendMail(user: any): Observable<any>  {
  return this.http.get(this.url+'send_mail/' + user);
} 

}

