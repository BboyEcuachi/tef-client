import { Component } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Transfer } from 'src/app/services/interfaces/transfer.interface';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.sass']
})
export class TransfersComponent {
  transfers: Transfer[] = [];
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getTransfers().pipe(first()).subscribe(data => this.transfers = data);
  }
}
