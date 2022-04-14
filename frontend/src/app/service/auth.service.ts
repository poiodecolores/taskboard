import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpURL = "http://localhost:3003/api/user"
  private loginURL = "http://localhost:3003/api/auth"


  constructor(private http: HttpClient) { }

  signUpUser(user:any){
    return this.http.post<any>(this.signUpURL, user)
  }

  loginUser(user:any){
    return this.http.post<any>(this.loginURL,user)
  }
}
