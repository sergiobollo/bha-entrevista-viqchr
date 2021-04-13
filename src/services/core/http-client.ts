import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class NmsHttpClientService {
  apiUrl = "https://6050ad9e53460900176703c6.mockapi.io/api/";

  constructor(private http: HttpClient) {}

  get<T>(url: string, data: any = null): Observable<T> {
    try {
      let httpParams = new HttpParams();

      if (data) {
        Object.keys(data).forEach(key => {
          httpParams = httpParams.append(key, data[key]);
        });
      }

      return this.http.get<T>(this.apiUrl + url, {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        params: httpParams
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, data, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
}
