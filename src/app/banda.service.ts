import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Banda } from './banda';
@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private apiUrl: string = environment.baseUrl + 'bandas';
  constructor(private http: HttpClient) { }
  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }
}
