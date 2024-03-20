import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = "http://localhost:5278/api/Supplier";

  httpClient = inject(HttpClient);
  constructor() { }

  getById(id: any) {
    return this.httpClient.get(this.baseUrl + "/GetByID/" + id);
  }

  update(categoryModel: any) {
    return this.httpClient.put(this.baseUrl + "/Update", categoryModel);
  }

  create(categoryModel: any) {
    return this.httpClient.post(this.baseUrl + "/Create", categoryModel);
  }

  getAll() {
    return this.httpClient.get(this.baseUrl + "/Get");
  }

  delete(id: any) {
    return this.httpClient.delete(this.baseUrl + "/Delete/" + id);
  }
}
