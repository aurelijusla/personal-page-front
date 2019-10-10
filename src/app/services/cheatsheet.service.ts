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
  //   return [{
  //     id: 0,
  //     name: 'AngularLS',
  //     command: 'npm install angular',
  //     docs: 'Angular docs link',
  //     isSelected: false,
  //   },
  //   {
  //     id: 1,
  //     name: 'Node.JS',
  //     command: 'npm install node',
  //     docs: 'Node docs link',
  //     isSelected: false,
  //   },
  // ]
  }
}
