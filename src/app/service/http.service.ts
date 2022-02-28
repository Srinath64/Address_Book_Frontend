
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8085/addressbook";

  constructor(private httpClient: HttpClient) { }

  getAddressBookData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/details");
  }

  addNewContact(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", body);
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id);
  }

  updateContact(id: number, body: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update/" + id, body);
  }

  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get(this.baseUrl + "/api",{headers,responseType: 'text' as 'json'})
  }
  
    getUsers() {
      let username='srinath'
      let password='srivarun'
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
     return  this.httpClient.get(this.baseUrl + "/getUsers",{headers});
    }

}
