import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  forfaitsUrl = 'https://forfaits.herokuapp.com/forfaits'; 

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);  
  }
/*
  addForfaits(forfait: Forfait): Observable<Forfait[]> {
    return this.http.post<Forfait[]>(this.forfaitsUrl, forfait, httpOptions);  
  }
*/

  addForfaits(data): Observable<any> {
    return this.http.post<any>(this.forfaitsUrl, data);
  }

  /* PUT: mise à jour du forfait */
  updateForfaits(forfait: Forfait): Observable<any> {
    const id = this.forfaitsUrl+'id';
    return this.http.put<Forfait[]>(this.forfaitsUrl +'/'+ id, forfait, httpOptions);  
  }

  /* DELETE: suppression du forfait */
  deleteForfaits(id: number): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl +'/'+ id, httpOptions);  
  }

}
