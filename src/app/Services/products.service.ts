import { environment } from './../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOption
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //, Authorization: 'my-auth-token'
      })
    }
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured:', error.error)
    } else {
      console.error(`Backend returned cose ${error.status},body was:`, error.error)
    }
    return throwError(() => new Error('Error occured, please try again'))
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products`)
  }

  getProductsByCatId(catId: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Products?categoryId=${catId}`)
  }

  getProductById(prdId: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.APIURL}/Products/${prdId}`)
  }

  addProduct(newPrd: IProduct): Observable<IProduct> {
    // return this.httpClient.post<IProduct>(`${environment.APIURL}/products/`,JSON.stringify(newPrd),this.httpOption)
    return this.httpClient
      .post<IProduct>(`${environment.APIURL}/Products/`, JSON.stringify(newPrd), this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateProduct(prdID: number, UpdatedPrd: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${environment.APIURL}/Products/${prdID}`, JSON.stringify(UpdatedPrd), this.httpOption
    );
  }

  // delete product
  deleteProduct(prdID: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${environment.APIURL}/Products/${prdID}`, this.httpOption);
  }


}
