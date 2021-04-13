import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  getArticulos(url: string) {
    try {
      return this.http.get(url);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

}
