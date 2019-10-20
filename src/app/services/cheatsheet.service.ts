import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheatsheetItem } from '../models/cheatsheet-item.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class CheatsheetService {
  cheatsheetsUrl: string = 'http://localhost:3000/cheatsheets';

  constructor(private http: HttpClient) { }

  getCheatsheetItems(): Observable<CheatsheetItem[]> {
    return this.http.get<CheatsheetItem[]>(`${this.cheatsheetsUrl}`);
  }
}
