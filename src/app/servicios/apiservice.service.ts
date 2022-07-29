import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Login {
  usuario: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  users: any = [];
  apiURL = 'http://localhost:50/proyectointegrador/backed/getUsers.php';

  constructor(public http: HttpClient) { }

  public obtnenerDatos() {
    return this.http.get(this.apiURL);
  }

  //INICIO  DE SESION
  public iniciarSesion(obj: Login) {
    return this.http.post<any>(this.apiURL, obj);
  }
}
