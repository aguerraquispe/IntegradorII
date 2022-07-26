import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  users: any = [];
  apiURL = 'http://localhost:50/proyectointegrador/backed/getUsers.php';

  constructor(public http: HttpClient) { }

  obtnenerDatos(){
    return this.http.get(this.apiURL);
  }
}
