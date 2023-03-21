import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../Models/icategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAllCategories():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`)
  }
}
