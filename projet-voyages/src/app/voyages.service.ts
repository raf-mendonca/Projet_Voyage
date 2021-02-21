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

  /*forfaitsUrl = 'https://forfaits.herokuapp.com/forfaits';*/
  forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl+'da/1996489');  
  }

  addForfaits(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);  
  }

  /* PUT: mise à jour du forfait */
  updateForfaits(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait[]>(this.forfaitsUrl + id, forfait, httpOptions);  
  }

  /* DELETE: suppression du forfait */
  deleteForfaits(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl +id, httpOptions);  
  }

}
