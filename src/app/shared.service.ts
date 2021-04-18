import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  APIUrl = "https://reqres.in/api/users?page=";

  constructor(private http : HttpClient) { }


  getusers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 1)
 }


 getusers2():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + 2)
}



}
