import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SparePartService {


  baseUrl = "http://localhost:5278/api/SparePart";

  httpClient = inject(HttpClient);

  constructor() { }

  getById(id: any) {
    return this.httpClient.get(this.baseUrl + "/GetByID/" + id);
  }

  getAll() {
    return this.httpClient.get(this.baseUrl + "/GetAll");
  }

  delete(id: any) {
    return this.httpClient.delete(this.baseUrl + "/Delete/" + id);
  }

  update(sparePart: any) {
    return this.httpClient.put(this.baseUrl + "/Update", sparePart);
  }

  create(sparePart: any) {
    return this.httpClient.post(this.baseUrl + "/Create", sparePart);
  }
}
