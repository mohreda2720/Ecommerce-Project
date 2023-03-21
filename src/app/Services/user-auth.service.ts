import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  retry,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../Models/iusers';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  httpOptions;

  constructor(private httpClient: HttpClient) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //Authorization: 'my-auth-token',
      }),
    };
  }

  LogIn(userName: string, password: string) {
    // Call login API, And get access token
    let userToken = '1a2b3c4567';
    localStorage.setItem('token', userToken);
    this.isLoggedSubject.next(true);
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getUserStatus(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Error occured, please try again'));
  }

  getAllUsers(): Observable<IUsers[]> {
    return this.httpClient
      .get<IUsers[]>(`${environment.APIURL}/user`)
      .pipe(retry(3), catchError(this.handleError));
  }

  getUserByID(userId: number): Observable<IUsers> {
    return this.httpClient
      .get<IUsers>(`http://localhost:3000/user/${userId}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  addUser(newUser: IUsers): Observable<IUsers> {
    return this.httpClient
      .post<IUsers>(
        `${environment.APIURL}/user`,
        JSON.stringify(newUser),
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.handleError)); // handling error
  }

  updateUser(userId: number, updatedUser: IUsers): Observable<IUsers> {
    return this.httpClient
      .put<IUsers>(
        `${environment.APIURL}/user/${userId}`,
        JSON.stringify(updatedUser),
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  deleteUser(userId: number): Observable<IUsers> {
    return this.httpClient
      .delete<IUsers>(
        `${environment.APIURL}/user/${userId}`,
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.handleError));
  }
}
