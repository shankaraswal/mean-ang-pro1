import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  ServerUrl = 'http://localhost:4000/home';
  constructor(private http: HttpClient) { }

  getiTitle(){
    return 'shankar singh aswal';
   }

   getiItemlist() {
      return this.http.get(this.ServerUrl)
    }
}

