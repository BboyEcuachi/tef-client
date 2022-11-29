import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from './interfaces/bank.interface';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private readonly http: HttpClient) { }

  getBanks() {
    return this.http.get<{ Banco: Bank[]}>('/api/listado_banco');
  }
}
