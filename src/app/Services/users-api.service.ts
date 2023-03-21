import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../Models/iusers';


@Injectable({
  providedIn: 'root',
})
export class  UsersApiService {
  private httpOptions = {};
  constructor(private HttpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
  addNewUser(user: IUsers): Observable<IUsers> {
    return this.HttpClient.post<IUsers>(
      `http://localhost:3000/user`,
      JSON.stringify(user),
      this.httpOptions
    );
  }
}

