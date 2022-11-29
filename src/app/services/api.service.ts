import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receiver } from './interfaces/receiver.interface';
import { Transfer } from './interfaces/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  receivers: Receiver[] = [];
  constructor(private readonly http: HttpClient) { }

  getReceivers() {
    return this.http.get<Receiver[]>('/api/users/receivers');
  }

  registerReceiver(data: Receiver) {
    return this.http.post<Receiver>('/api/users/receivers', data);
  }

  sendTransfer(data: Transfer) {
    return this.http.post<Transfer>('/api/transfers', data);
  }

  getTransfers() {
    return this.http.get<Transfer[]>('/api/transfers');
  }

}
